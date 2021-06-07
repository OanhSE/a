import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Address} from '../../_models/address';
import {Cinema} from '../../_models/cinema';
import {CinemaService} from '../../_service/cinema.service';
import {AddressService} from '../../_service/address.service';
import {ActivatedRoute, Router} from '@angular/router';
import {formatDate} from '@angular/common';
import {FilmService} from '../../_service/film.service';
import {Film} from '../../_models/film';
import {FilmSession} from '../../_models/filmSession';
import {FilmSessionService} from '../../_service/film-session.service';
import {TicketService} from '../../_service/ticket.service';
import {User} from '../../_models/user';
import {UserService} from '../../_service/user.service';

@Component({
  selector: 'app-book-ticket',
  // templateUrl: './book-ticket.component.html',
  // styleUrls: ['./book-ticket.component.css']
  templateUrl: './book-ticket.components.html',
  styleUrls: ['./book-ticket.components.css']
})
export class BookTicketComponent implements OnInit {

  form: FormGroup;
  listHCM ;
  listTNB;
  listDNB;
  listNMT;
  listBMT;
  listDBTB;
  listDBSH;
  listHN;

  myControl = new FormControl();
  address$: Address =  new Address('TP.HCM', 'Tầng 7, Cantavil Premier, Số 1 đường Song Hành, Xa lộ Hà Nội, P.An Phú, Q.2', 'Việt Nam');

  cinemadetail$: Cinema = new Cinema(1, 'Cantavil', this.address$);

  cinemas: Cinema[];
  listfilms$: Film[];
  listFilmSession$: FilmSession[];
  film$: Film =  new Film(0, '', 0,
    '', '', '', new Date(),
    '', '', '', '/lotte.jpg',
    'https://www.youtube.com/watch?v=GxV4BYmWnBE&list=RDGxV4BYmWnBE&start_radio=1', 0);
  cinema$: Cinema =  new Cinema(1, 'Cantavil', this.address$);
  date$: Date = new Date();
  dates$ = new Array<Date>();
  ds: Date = new Date();
  user: User = new User('', '', '', '', '', '', new Date(), 0, false);


  constructor(
    private cinamaService: CinemaService,
    private addressService: AddressService,
    private  router: Router,
    private formBuilder: FormBuilder,
    private filmService: FilmService,
    private  filmSessionService: FilmSessionService,
    private route: ActivatedRoute,
    private  ticketService: TicketService,
    private userService: UserService

  ) {
    this.userService.user.subscribe(x => this.user = x);
    this.dates$.push(new Date(this.ds));
    for ( let i = 0 ; i < 6; i++) {
      const str = this.ds.setDate(this.ds.getDate() + 1);
      this.dates$.push(new Date(this.ds));
    }
    }

    ngOnInit(): void {
    this.getALlCinema();
    this.filmService.getAll().subscribe((x) => {
      this.listfilms$ = x;

    });
    this.route.params.subscribe((param) => {

      this.findById(param.idfilm);

    });


  }
  findById(id: number): void {
    this.filmService.getFilmById(id).subscribe((x) => {
      this.film$ = x;

    });
  }
  bookTicket(filmsession: FilmSession): void{
    if (this.user){
      this.router.navigate(['/checkout'],  {queryParams: { filmsession: filmsession.id } });

    }else {
      this.router.navigate(['./authen/login']);
    }
  }
  tranferFilm(film: Film): void{
    this.film$ = film;
    const  newdate = formatDate(this.date$, 'yyyy-MM-dd', 'en-US');
    this.filmSessionService.getFilmSessionByCinemaAndDateAndFilm(newdate, this.cinema$.id, this.film$).subscribe((x) => {
      this.listFilmSession$ = x;
    });
  }
  tranferBySingle(cinema: Cinema): void{
    this.cinemadetail$ = cinema;
    if (this.cinemadetail$.id){
      // this.GetAddressByCinema(this.cinemadetail$.id);

    }
    this.cinema$ = cinema;
    const  newdate = formatDate(this.date$ , 'yyyy-MM-dd', 'en-US');
    this.filmSessionService.getFilmSessionByCinemaAndDateAndFilm(newdate, this.cinema$.id, this.film$).subscribe((x) => {
      this.listFilmSession$ = x;
    });
  }
  // GetAddressByCinema(id: number): void{
  //   this.addressService.getByCinema(id).subscribe((x) => {
  //     console.log(x);
  //     this.address$ = x;
  //   });
  // }
  getALlCinema(): void {

    this.cinamaService.getCinemaByArea(1).subscribe((result) => {
      this.listHCM = result;
    });
    this.cinamaService.getCinemaByArea(2).subscribe((result) => {
      this.listHN = result;
    });
    this.cinamaService.getCinemaByArea(3).subscribe((result) => {
      this.listDBSH = result;
    });
    this.cinamaService.getCinemaByArea(4).subscribe((result) => {
      this.listDBTB = result;
    });
    this.cinamaService.getCinemaByArea(5).subscribe((result) => {
      this.listBMT = result;
    });
    this.cinamaService.getCinemaByArea(6).subscribe((result) => {
      this.listNMT = result;
    });
    this.cinamaService.getCinemaByArea(7).subscribe((result) => {
      this.listDNB = result;
    });

}


  selectDate(d: Date): void{
    // const  newdate = formatDate(this.form.controls.date.value, 'yyyy-MM-dd\'T\'HH:mm:ss', 'en-US');
    this.date$ = d;
    const  newdate = formatDate(d, 'yyyy-MM-dd', 'en-US');
    this.filmSessionService.getFilmSessionByCinemaAndDateAndFilm(newdate, this.cinema$.id, this.film$).subscribe((x) => {
      this.listFilmSession$ = x;
    });
  }


}
