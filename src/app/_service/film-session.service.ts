import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {FilmSession} from '../_models/filmSession';
import {Film} from '../_models/film';
@Injectable({
  providedIn: 'root'
})
export class FilmSessionService {
  private filmSessionsSubject: BehaviorSubject<FilmSession>;
  public filmSession: Observable<FilmSession>;
  public filmSessionvalue: FilmSession ;
  public url = '';
  public apiUrl = 'http://localhost:8080';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.filmSessionsSubject = new BehaviorSubject<FilmSession>(this.filmSessionvalue);
    this.filmSession = this.filmSessionsSubject.asObservable();
  }
  public get filmSessionValue(): FilmSession {
    return this.filmSessionsSubject.value;

  }
  addSession(filmSession: FilmSession): Observable<FilmSession>{
    return this.http.post<FilmSession>(`${this.apiUrl}/admin/add-session`,filmSession);
  }
  deleteSession(id: number): Observable<string>{
    return this.http.get<string>(`${this.apiUrl}/admin/delete/session/${id}`);
  }
  getSession(): Observable<FilmSession>{
    return this.http.get<FilmSession>(`${this.apiUrl}/admin/session`);
  }
  update(filmSession: FilmSession): Observable<FilmSession>{
    return  this.http.post<FilmSession>(`${this.apiUrl}/session`, filmSession);
  }

  getFilmSessionByCinemaAndDate(date: Date, idCinema: number): Observable<FilmSession>{
    let params = new HttpParams();
    params = params.append('date', date.toDateString());
    params = params.append('idCinema', String(idCinema));
    return this.http.get<FilmSession>(`${this.apiUrl}/filmSessions`, {params});
  }
  getSessionById(id: number): Observable<FilmSession>{
    return this.http.get<FilmSession>(`${this.apiUrl}/getSession/${id}`);
  }

// getallfilmSession
  getAll(): Observable<FilmSession[]> {
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);
    return this.http.get<FilmSession[]>(this.url + 'getFilmSessions');
  }
}
