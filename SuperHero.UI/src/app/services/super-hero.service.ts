import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private url = "SuperHero";

  constructor(private http: HttpClient) { }
  
  public getSuperHeroes() : Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }
}
