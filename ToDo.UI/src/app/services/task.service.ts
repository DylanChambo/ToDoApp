import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = "Task";

  constructor(private http: HttpClient) { }
  
  public getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/${this.url}`);
  }
}
