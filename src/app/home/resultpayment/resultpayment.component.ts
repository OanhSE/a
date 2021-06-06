import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../_service/alert.service';
import {UserService} from '../../_service/user.service';
import {first} from 'rxjs/operators';
import {TicketService} from '../../_service/ticket.service';

@Component({
  selector: 'app-resultpayment',
  templateUrl: './resultpayment.component.html',
  styleUrls: ['./resultpayment.component.css']
})
export class ResultpaymentComponent implements OnInit {

  code: string;
  currentURL: string;

  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    private userService: UserService,
    private ticketService: TicketService
  ) {
  }

  ngOnInit(): void {
    this.currentURL = this.router.url.toString();
    this.code = this.currentURL.slice(this.currentURL.indexOf('=') + 1, this.currentURL.length);
    this.route.queryParamMap.subscribe((params) => {
        console.log('pr:', params);
        console.log('filmsession', params.get('paymentId'));
        const paymentId = params.get('paymentId');
        const PayerID = params.get('PayerID');
        this.ticketService.completePayment(paymentId, PayerID).subscribe((rs) => {
          console.log('rs', rs);
          localStorage.removeItem('tickets');
  });
    });

  }
}
