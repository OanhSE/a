import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Ticket} from '../_models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ticketsSubject: BehaviorSubject<Ticket>;
  public ticket: Observable<Ticket>;
  public ticketvalue: Ticket ;
  public url = '';
  public apiUrl = 'http://localhost:8080';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.ticketsSubject = new BehaviorSubject<Ticket>(this.ticketvalue);
    this.ticket = this.ticketsSubject.asObservable();
  }
  public get movieValue(): Ticket {
    return this.ticketsSubject.value;

  }
  // getallticket
  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/getTickets`);
  }
  addTicket(ticket: Ticket): Observable<Ticket>{
    return  this.http.post<Ticket>(`${this.apiUrl}/addTicket`, ticket);
  }
  getTicketById(id: string): Observable<Ticket>{
    return  this.http.get<Ticket>(`${this.apiUrl}/tickets/${id}`);
  }


}
