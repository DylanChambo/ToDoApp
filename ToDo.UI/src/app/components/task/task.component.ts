import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() tasksUpdated = new EventEmitter<Task[]>();
  formatDate = formatDate;

  taskToEdit?: Task;
  
  constructor() { }

  ngOnInit(): void {
  }

  editTask(task: Task) {
    this.taskToEdit = task;
  }

  passTasks(tasks: Task[]) {
    this.tasksUpdated.emit(tasks);
  }

  getPriorityColor(priority: string) {
    switch (priority) {
      case "High":
        return "rgba(255, 0, 0, 0.4)";
      case "Low":
        return "rgba(120, 255, 0, 0.4)";
      default:
        return "rgba(255, 120, 0, 0.4)";
    }
  }
}
