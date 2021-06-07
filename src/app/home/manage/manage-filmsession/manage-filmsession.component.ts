import { Component, OnInit } from '@angular/core';
import { FilmSessionService} from '../../../_service/film-session.service';
import { UserService } from '../../../_service/user.service';
import {HallService} from '../../../_service/hall.service';
import {SeatService} from '../../../_service/seat.service';
import {TicketService} from '../../../_service/ticket.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Address} from '../../../_models/address';
import {Cinema} from '../../../_models/cinema';
import {Film} from '../../../_models/film';
import {CinemaService} from '../../../_service/cinema.service';
import {AddressService} from '../../../_service/address.service';
import {Router} from '@angular/router';
import {FilmService} from '../../../_service/film.service';
import {formatDate} from '@angular/common';
import {FilmSession} from '../../../_models/filmSession';

@Component({
  selector: 'app-manage-filmsession',
  templateUrl: './manage-filmsession.component.html',
  styleUrls: ['./manage-filmsession.component.css']
})
export class ManageFilmsessionComponent implements OnInit {


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
  constructor(
    private cinamaService: CinemaService,
    private addressService: AddressService,
    private  router: Router,
    private formBuilder: FormBuilder,
    private filmService: FilmService,
    private filmSessionService: FilmSessionService

  ) {
  }

  ngOnInit(): void {
    this.getALlCinema();
    this.form = this.formBuilder.group({
      date: ['', Validators.required],
    });
    this.filmService.getAll().subscribe((x) => {
      this.listfilms$ = x;

    });
    this.filmSessionService.getAll().subscribe((x) => {

      this.listFilmSession$ = x;
  });


  }
  tranferBySingle(cinema: Cinema): void{
    this.cinemadetail$ = cinema;
    if (this.cinemadetail$.id){
      this.GetAddressByCinema(this.cinemadetail$.id);

    }
    console.log('cinema', cinema);
  }
  GetAddressByCinema(id: number): void{
    this.addressService.getByCinema(id).subscribe((x) => {
      console.log(x);
      this.address$ = x;
    });
  }
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


  onSubmit(): void{
    // const  newdate = formatDate(this.form.controls.date.value, 'yyyy-MM-dd\'T\'HH:mm:ss', 'en-US');
    const  newdate = formatDate(this.form.controls.date.value, 'yyyy-MM-dd', 'en-US');
    console.log('newdate', newdate);
    //   this.filmSessionService.getFilmSessionByCinemaAndDate(newdate, this.cinemadetail$.id).subscribe((x) => {
    //     console.log('filmsession', x);
    //     this.listFilmSession$ = x;
    //     console.log('filmsession', x[0]);
    //   });
  }


}
