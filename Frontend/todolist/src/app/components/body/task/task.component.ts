import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { TaskResponse } from '../../../models/task.response.model';
import { TaskRequest } from '../../../models/task.request.model';
import { TaskService } from '../../../services/task.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
  ]
})
export class TaskComponent {
  @Input() task!: TaskResponse;
  @Output() taskDeleted = new EventEmitter<number>();
  @Output() taskUpdated = new EventEmitter<TaskResponse>();

  isEditing: boolean = false;
  editedTask!: TaskRequest;

  constructor(private taskService: TaskService) {}

  enableEditing() {
    this.isEditing = true;
    this.editedTask = { ...this.task }; 
  }

  cancelEditing() {
    this.isEditing = false;
  }

  saveTask() {
    if (this.task.id) {
      this.taskService.updateTask(this.task.id, this.editedTask).subscribe(updatedTask => {
        this.taskUpdated.emit(updatedTask);
        this.isEditing = false;
      });
    }
  }

  deleteTask() {
    if (this.task.id) {
      this.taskService.deleteTask(this.task.id).subscribe(() => {
        this.taskDeleted.emit(this.task.id);
      });
    }
  }
}
