import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskResponse } from '../../models/task.response.model';
import { TaskService } from '../../services/task.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  imports: [DragDropModule, TaskComponent, CommonModule],
})
export class BodyComponent implements OnInit {
  todo: TaskResponse[] = [];
  done: TaskResponse[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.todo = tasks.filter(task => !task.task_is_done);
      this.done = tasks.filter(task => task.task_is_done);
    });
  }

  drop(event: CdkDragDrop<TaskResponse[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const task = event.previousContainer.data[event.previousIndex];
      task.task_is_done = event.container.id === 'doneList';
      this.taskService.updateTask(task.id, task).subscribe(() => {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      });
    }
  }

  onTaskDeleted(taskId: number) {
    this.todo = this.todo.filter(task => task.id !== taskId);
    this.done = this.done.filter(task => task.id !== taskId);
  }

  onTaskUpdated(updatedTask: TaskResponse) {
    const list = updatedTask.task_is_done ? this.done : this.todo;
    const index = list.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) list[index] = updatedTask;
  }
}
