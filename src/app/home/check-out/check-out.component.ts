import { Hall } from './../../_models/hall';
import { FilmSession } from './../../_models/filmSession';
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
import { Seat } from '../../_models/seat';
import { Film} from '../../_models/film';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  loading$ = false;
  seats$: Seat[] = null;
  film: Film =  new Film(0, '', 0,
    '', '', '', new Date(),
    '', '', '', '/lotte.jpg',
    'https://www.youtube.com/watch?v=GxV4BYmWnBE&list=RDGxV4BYmWnBE&start_radio=1', 0);
    address$: Address =  new Address('TP.HCM', 'Tầng 7, Cantavil Premier, Số 1 đường Song Hành, Xa lộ Hà Nội, P.An Phú, Q.2', 'Việt Nam');

    cinemadetail$: Cinema = new Cinema(1, 'Cantavil', this.address$);
  hall: Hall = new Hall(0, 'Hall', 'a', this.cinemadetail$);
  filmSession$: FilmSession = new FilmSession(0, new Date(), this.film, this.hall, '0');
  listseats$: Seat[] = [];
  sum$: number = 0;
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
       
       this.filmSession$ = result ;
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
    this.listseats$.push(seat);
    this.sum$ = this.listseats$.length * 100;
  }
}
