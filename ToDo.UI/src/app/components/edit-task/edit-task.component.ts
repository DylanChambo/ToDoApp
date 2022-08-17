import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() task?: Task;

  constructor() { }

  ngOnInit(): void {
  }

  updateTask(task: Task) {

  }

  deleteTask(task: Task) {

  }

  createTask(task: Task) {
    
  }
}
