import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private url = "ToDo";

  constructor(private http: HttpClient) { }
  
  public getSuperHeroes() : Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${environment.apiUrl}/${this.url}`);
  }
}
