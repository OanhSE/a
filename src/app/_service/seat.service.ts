import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Seat} from '../_models/seat';
@Injectable({
  providedIn: 'root'
})
export class SeatService {

  private seatsSubject: BehaviorSubject<Seat>;
  public seat: Observable<Seat>;
  public seatvalue: Seat ;
  public url = '';
  public apiUrl = 'http://localhost:8080';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.seatsSubject = new BehaviorSubject<Seat>(this.seatvalue);
    this.seat = this.seatsSubject.asObservable();
  }
  public get movieValue(): Seat {
    return this.seatsSubject.value;

  }
  // getallseat
  getAll(): Observable<Seat[]> {
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);
    return this.http.get<Seat[]>(this.url + 'getSeats');
  }
  addSeat(seat: Seat): Observable<Seat>{
    return this.http.post<Seat>(`${this.apiUrl}/seat`, seat);
  }
  getSeatByHall(hallId: number): Observable<Seat[]>{
    let params = new HttpParams();
    params = params.append('hallId', hallId.toString());
    return  this.http.post<Seat[]>(`${this.apiUrl}/seats`, {params});
  }
  getSeatById(id: string): Observable<Seat>{
    return this.http.get<Seat>(`${this.apiUrl}/seats/${id}`);
  }


}
