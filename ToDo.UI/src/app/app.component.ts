import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo.UI';
  tasks: Task[] = [];

  todo: Task[] = [];
  next: Task[] = [];
  doing: Task[] = [];
  done: Task[] = [];


  constructor(private TaskService: TaskService) {}
  // status = ['To Do', 'Next', 'Doing', 'Done'];

  ngOnInit() : void {
    var promise = this.TaskService.getTasks().subscribe((result: Task[]) => {
      this.tasks = result;
      for (var task of this.tasks) {
        console.log(task)
        switch (task.status) {
          case 'To Do':
            this.todo.push(task);
            break;
          case 'Next':
            this.next.push(task);
            break;
          case 'Doing':
            this.doing.push(task);
            break;
          case 'Done':
            this.done.push(task);
            break;
        }
      }
    })
  }
  

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

