import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../../_service/film.service';
import {Cinema} from '../../../_models/cinema';
import {CinemaService} from '../../../_service/cinema.service';
import {Address} from '../../../_models/address';
import {AddressService} from '../../../_service/address.service';

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.css']
})
export class ListCinemaComponent implements OnInit {
  @Input() cinemadetail$: Cinema ;
  address$: Address;
  constructor(
    private  route: ActivatedRoute,
    private  filmService: FilmService,
    private  addressService: AddressService,
    private  cinemaService: CinemaService,
    private  router: Router
  ) {


  }

  ngOnInit(): void {
    // this.route.params.subscribe((param) => {
    //
    //   this.findById(param.id);
    //
    // });
    this.GetAddressByCinema(this.cinemadetail$.id);


  }
 GetAddressByCinema(id: number): void{
    this.addressService.getByCinema(id).subscribe((x) => {
      this.address$ = x;
    });
 }
  findById(id: number): void{
    this.cinemaService.getById(id).subscribe((x) => {
      this.cinemadetail$ = x;
    });
  }

}
