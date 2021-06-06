import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpRequest} from '@angular/common/http';
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

fetchTickets(): Ticket[]{
    return JSON.parse(localStorage.getItem('tickets')) || [];
  }
  setTickets(tickets: Ticket[]): void{
    localStorage.setItem('tickets', JSON.stringify(tickets));
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

  makePayment(sum: number, urlSuccess: string, urlCancel: string): Observable<{redirect_url: ''}> {
    return  this.http.post<{redirect_url: ''}>
      (`${this.apiUrl}/make/payment?sum=${sum}&urlSuccess=${urlSuccess}&urlCancel=${urlCancel}`, sum);
  }
//   @PostMapping(URL_SUCCESS)
//   public Map<String, Object> completePayment(HttpServletRequest request, @RequestBody WrapperTicket wrapperTicket) {
//   return service.completePayment(request, wrapperTicket);
// }
  completePayment(paymentId: string, payerId: string): Observable<{}>{
    // tslint:disable-next-line:max-line-length
    return this.http.post<{}>(this.apiUrl + '/pay/success?paymentId=' + paymentId + '&payerId=' + payerId , localStorage.getItem('tickets'));
  }

}
