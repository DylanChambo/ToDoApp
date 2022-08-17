import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() task?: Task;
  @Output() tasksUpdated = new EventEmitter<Task[]>();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  formatDate = formatDate;

  updateTask(task: Task) {
    this.taskService
    .updateTasks(task)
    .subscribe((tasks: Task[]) => this.tasksUpdated.emit(tasks));
  }

  deleteTask(task: Task) {
    this.taskService
    .deleteTasks(task)
    .subscribe((tasks: Task[]) => this.tasksUpdated.emit(tasks));
  }

  createTask(task: Task) {
    this.taskService
    .createTasks(task)
    .subscribe((tasks: Task[]) => this.tasksUpdated.emit(tasks));
  }
}
