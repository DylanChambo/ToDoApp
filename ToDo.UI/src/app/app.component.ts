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
  
  tasks: {Todo: Task[], Next: Task[], Doing: Task[], Done: Task[]} = {
    Todo: [],
    Next: [],
    Doing: [],
    Done: []
  }


  constructor(private TaskService: TaskService) {}

  ngOnInit() : void {
    this.TaskService.getTasks().subscribe((result: Task[]) => {
      for (var task of result) {
        console.log(task.status)
        switch (task.status) {
          case 'Todo':
            this.tasks.Todo.push(task);
            break;
          case 'Next':
            this.tasks.Next.push(task);
            break;
          case 'Doing':
            this.tasks.Doing.push(task);
            break;
          case 'Done':
            this.tasks.Done.push(task);
            break;
          default:
            task.status = 'Todo';
            this.TaskService.updateTasks(task).subscribe();
            this.tasks.Todo.push(task);
            break;
        }
      }
    })
  }
  

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      const task = event.container.data[event.currentIndex];
      task.status = event.container.id;
      console.log(task)
      this.TaskService.updateTasks(task).subscribe();
      
    }
  }
}

