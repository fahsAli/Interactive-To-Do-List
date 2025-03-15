import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { TaskRequest } from '../../models/task.request.model';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class AddTaskDialogComponent {
  task: TaskRequest = {
    title: '',
    task_is_done: false,
    created_at: new Date().toISOString(),
    priority: null,
    due_date: null
  };

  minDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (!this.task.title || this.task.title.trim() === '') {
      return; // Don't save if title is empty
    }
    
    // Ensure due_date is in ISO format if it exists
    if (this.task.due_date) {
      if (typeof this.task.due_date === 'object') {
        this.task.due_date = (this.task.due_date as Date).toISOString().split('T')[0];
      }
    }
    
    this.dialogRef.close(this.task);
  }
}