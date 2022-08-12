import { Component } from '@angular/core';
import { ToDo } from './models/todo';
import { ToDoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  tasks: ToDo[] = [];

  constructor(private superHeroService: ToDoService) {}

  ngOnInit() : void {
    this.superHeroService.getSuperHeroes().subscribe((result: ToDo[]) => (this.tasks = result));
  }
}
