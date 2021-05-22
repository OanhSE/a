import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../../_service/film.service';
import {Cinema} from '../../../_models/cinema';
import {CinemaService} from '../../../_service/cinema.service';
import {Address} from '../../../_models/address';
import {AddressService} from '../../../_service/address.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FilmSessionService} from '../../../_service/film-session.service';
import {formatDate} from '@angular/common';
import {FilmSession} from '../../../_models/filmSession';

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.css']
})
export class ListCinemaComponent implements OnInit {
  @Input() cinemadetail$: Cinema ;
  @Input()  address$: Address;
  listFilmSession$: FilmSession[];
   date: Date;
     form: FormGroup;
  constructor(
    private  route: ActivatedRoute,
    private  filmService: FilmService,
    private  addressService: AddressService,
    private  cinemaService: CinemaService,
    private  router: Router,
    private formBuilder: FormBuilder,
    private  filmSessionService: FilmSessionService,
  ) {


  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      date: ['', Validators.required],
});



  }

  findById(id: number): void{
    this.cinemaService.getById(id).subscribe((x) => {
      this.cinemadetail$ = x;
    });
  }
  bookTicket(filmsession: FilmSession): void{
    this.router.navigate(['/checkout'],  {queryParams: { filmsession: filmsession.id } });
  }
  onSubmit(): void{
     // const  newdate = formatDate(this.form.controls.date.value, 'yyyy-MM-dd\'T\'HH:mm:ss', 'en-US');
     const  newdate = formatDate(this.form.controls.date.value, 'yyyy-MM-dd', 'en-US');
     console.log('newdate', newdate);
     this.filmSessionService.getFilmSessionByCinemaAndDate(newdate, this.cinemadetail$.id).subscribe((x) => {
      console.log('filmsession', x);
      this.listFilmSession$ = x;
      console.log('filmsession', x[0]);
    });
  }
}
