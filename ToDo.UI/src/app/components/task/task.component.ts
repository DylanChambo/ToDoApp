import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  formatDate = formatDate;

  constructor() { }

  ngOnInit(): void {
  }

  getPriorityColour(priority: string): string {
    switch (priority) {
      case 'High':
        return '#ff0000';
      case 'Low':
        return '#00ff00';
      default:
        return '#777700';
    }
  }
}
