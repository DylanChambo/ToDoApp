import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.css']
})
export class TaskColumnComponent implements OnInit {
  taskToEdit?: Task;
  tasks: Task[] = [];
  @Input() status!: string;
  formatDate = formatDate;
  constructor(private TaskService: TaskService) {}

  ngOnInit() : void {
    this.TaskService.getTasks().subscribe((result: Task[]) => (this.tasks = result));
  }

  updateTaskList(tasks: Task[]) {
    this.tasks = tasks;
  }

  initNewTask() {
    this.taskToEdit = new Task();
  }

  editTask(task: Task) {
    this.taskToEdit = task;
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
