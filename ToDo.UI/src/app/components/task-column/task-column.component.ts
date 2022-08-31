import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.css']
})
export class TaskColumnComponent implements OnInit {
  taskToEdit!: Task;
  tasks: Task[] = [];

  @Input() status!: string;

  constructor(private TaskService: TaskService) {}

  ngOnInit() : void {
    this.TaskService.getTasks().subscribe((result: Task[]) => (this.tasks = result));
  }

  
  updateTaskList(tasks: Task[]) {
    this.tasks = tasks;
  }

  createTask() {
    this.taskToEdit = new Task;
    this.taskToEdit.status = this.status
  }
  
  // initNewTask() {
  //   this.taskToEdit = new Task();
  // }
}
