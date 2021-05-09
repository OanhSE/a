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

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
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

  constructor(
    private cinamaService: CinemaService,
    private addressService: AddressService,
    private  router: Router,
    private formBuilder: FormBuilder,

  ) {
  }

  ngOnInit(): void {
    this.getALlCinema();
    this.form = this.formBuilder.group({
      date: ['', Validators.required],
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
