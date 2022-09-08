import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.css']
})
export class TaskDisplayComponent implements OnInit {

  tasks: {Todo: Task[], Next: Task[], Doing: Task[], Done: Task[]} = {
    Todo: [],
    Next: [],
    Doing: [],
    Done: []
  }


  constructor(private TaskService: TaskService) {}

  // On init function (Runs on page Load)
  ngOnInit() : void {
    // Get request to get tasks from DB
    this.TaskService.getTasks().subscribe((result: Task[]) => {

      // Sort the tasks into the correct task lists based on their status
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
            // If it doesn't have a matching task status make it a Todo
            task.status = 'Todo';
            this.TaskService.updateTasks(task).subscribe();
            this.tasks.Todo.push(task);
            break;
        }
      }
    })
  }
  
  // On drop of a dragged task
  drop(event: CdkDragDrop<Task[]>) {
    
    if (event.previousContainer === event.container) {
      // If its in the same container move it to the new position
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Else move it to the new container and position
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      // And update the status 
      const task = event.container.data[event.currentIndex];
      task.status = event.container.id;
      console.log(task)
      this.TaskService.updateTasks(task).subscribe();
    }
  }
}
