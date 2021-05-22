import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../_service/film.service';
import {AddressService} from '../../_service/address.service';
import {CinemaService} from '../../_service/cinema.service';
import {FilmSessionService} from '../../_service/film-session.service';
import {formatDate} from '@angular/common';
import {Address} from '../../_models/address';
import {Cinema} from '../../_models/cinema';
import {SeatService} from '../../_service/seat.service';
import {Seat} from '../../_models/seat';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  seats$: Seat[] = null;
  loading$ = false;
constructor(
    private cinamaService: CinemaService,
    private addressService: AddressService,
    private  router: Router,
    private formBuilder: FormBuilder,
    private seatService: SeatService,
    private  route: ActivatedRoute,
    private filmSessionService: FilmSessionService,

  ) {
}

  async ngOnInit(): Promise<void> {
   this.route.queryParamMap.subscribe((params) => {
     console.log('filmsession', params.get('filmsession'));
     this.filmSessionService.getSessionById(Number(params.get('filmsession'))).subscribe((result) => {
       console.log('f', result);
       this.seatService.getAvailableSeat(9).subscribe((x) => {
         this.seats$ = x;
         console.log('seats', this.seats$);
         this.loading$ = true;
       });
     });
   });

  }
  _getAvailableSeat(id: number): void{
    this.seatService.getAvailableSeat(id).subscribe((x) => {
     this.seats$ = x;
     console.log('seats', this.seats$);
     this.loading$ = true;
  });
  }

  counter(n: number): Array<number> {
  return Array(n);

  }
  getSeatByRow(row: number): Seat[]{
  // console.log('hhhh', this.seats$.filter(value => ) || []);
  return this.seats$.filter(value => value.rowIndex === row) || [];
  }
  optionTicket(seat: Seat){

  }
}
