import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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
  bodyElement: HTMLElement = document.body;
  constructor() { }

  ngOnInit(): void {
  }

  dragStart(event: CdkDragStart) {
    this.bodyElement.style.cursor = 'grabbing'; 
  }

  drop(event: CdkDragDrop<Task[]>) {
    this.bodyElement.style.cursor = 'unset'; 
    this.newDropEvent.emit(event);
  }
}
