import { Component } from '@angular/core';
import { Task } from './models/task';
import { TaskService } from './services/task.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo.UI';
  tasks: Task[] = [];
  taskToEdit?: Task;

  pipe = new DatePipe('en-US');
  constructor(private TaskService: TaskService) {}

  ngOnInit() : void {
    this.TaskService.getTasks().subscribe((result: Task[]) => (this.tasks = result));
  }

  initNewTask() {
    this.taskToEdit = new Task();
  }

  editTask(task: Task) {
    this.taskToEdit = task;
  }
}
