import { Component } from '@angular/core';
import { Task } from './models/task';
import { TaskService } from './services/task.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo.UI';
  tasks: Task[] = [];
  taskToEdit?: Task;

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
