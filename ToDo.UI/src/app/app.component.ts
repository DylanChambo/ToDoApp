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
  
  constructor(private TaskService: TaskService) {}
  status = ['To Do', 'Next', 'Doing', 'Done'];
}
