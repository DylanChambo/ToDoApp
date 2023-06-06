import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = "tasks";

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateTasks(task: Task): Observable<Task[]> {
    return this.http.put<Task[]>(`${environment.apiUrl}/${this.url}`, task);
  }

  public createTasks(task: Task): Observable<Task[]> {
    return this.http.post<Task[]>(`${environment.apiUrl}/${this.url}`, task);
  }

  public deleteTasks(task: Task): Observable<Task[]> {
    return this.http.delete<Task[]>(`${environment.apiUrl}/${this.url}/${task.id}`);
  }
}
