import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks!: Task[];
  @Input() status!: String;

  @Output() newDropEvent = new EventEmitter<CdkDragDrop<Task[]>>();

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Task[]>) {
    this.newDropEvent.emit(event);
  }
}
