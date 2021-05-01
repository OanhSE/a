import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Cinema} from '../_models/cinema';
import {Film} from '../_models/film';
import {createSvgIcon} from '@material-ui/core';
@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  private cinemasSubject: BehaviorSubject<Cinema>;
  public cinema: Observable<Cinema>;
  public cinemavalue: Cinema ;
  public url = 'https://02f372f8-2841-4c6d-bae5-7b7a74b80923.mock.pstmn.io/getCinemas?fbclid=IwAR22sNvHt-UZ_2z8YzPPyBzBbTXQRaz9i-wlTMVP1ZS7jvecGkHCcdpI3EA';

  public apiUrl = 'http://localhost:8080';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.cinemasSubject = new BehaviorSubject<Cinema>(this.cinemavalue);
    this.cinema = this.cinemasSubject.asObservable();
  }
  public get cinemaValue(): Cinema {
    return this.cinemasSubject.value;

  }
  // getallcinema
  getAll(): Observable<Cinema[]> {
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);
    return this.http.get<Cinema[]>(`${this.apiUrl}/cinema` );
  }
  addCinema( cinema: Cinema): Observable<Cinema>{
    return this.http.post<Cinema>(`${this.apiUrl}/cinemas`, cinema);

  }
  getCinemaByArea( area: number): Observable<Cinema[]>{
    return this.http.get<Cinema[]>(`${this.apiUrl}/cinemas/area?area=${area}`);
  }
  getById( id: number): Observable<Cinema>{
    return this.http.get<Cinema>(`${this.apiUrl}/cinemas/${id}` );
  }
  editCinema( cinema: Cinema): Observable<Cinema>{
    return this.http.post<Cinema>(`${this.apiUrl}/cinemas`, cinema);
  }
  deleteCinema( id: number): Observable<string>{
    return this.http.delete<string>(`${this.apiUrl}/cinemas/${id}`);
  }
}
