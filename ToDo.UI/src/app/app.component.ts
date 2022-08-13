import { Component } from '@angular/core';
import { ToDo } from './models/todo';
import { ToDoService } from './services/todo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo.UI';
  tasks: ToDo[] = [];
  pipe = new DatePipe('en-US');
  constructor(private superHeroService: ToDoService) {}

  ngOnInit() : void {
    this.superHeroService.getSuperHeroes().subscribe((result: ToDo[]) => (this.tasks = result));
  }
}
