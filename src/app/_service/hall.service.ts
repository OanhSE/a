import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Hall} from '../_models/hall';
import {Cinema} from '../_models/cinema';
import {Film} from '../_models/film';

@Injectable({
  providedIn: 'root'
})
export class HallService {
  private hallsSubject: BehaviorSubject<Hall>;
  public hall: Observable<Hall>;
  public hallvalue: Hall ;
  public url = '';
  public apiUrl = 'http://localhost:8080';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.hallsSubject = new BehaviorSubject<Hall>(this.hallvalue);
    this.hall = this.hallsSubject.asObservable();
  }
  getHallByCinema(idCinema: number): Observable<Hall[]>{
    return  this.http.get<Hall[]>(`${this.apiUrl}/halls/getByCinema/${idCinema}`);
  }
  addHall(idCinema: number, hall: Hall): Observable<Hall>{
    return  this.http.post<Hall>(`${this.apiUrl}/halls/${idCinema}`, hall);
  }
  getHallById(id: number): Observable<Hall>{
    return  this.http.get<Hall>(`${this.apiUrl}/halls/${id}`);
  }


public get movieValue(): Hall {
    return this.hallsSubject.value;

  }

}
