import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../_service/cinema.service';
import { Cinema } from '../../_models/cinema';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {Address} from '../../_models/address';
import {AddressService} from '../../_service/address.service';
@Component({
  selector: 'app-cinema',
  // templateUrl: './cinema.component.html',
  // styleUrls: ['./cinema.component.css']
  templateUrl: './cinema.components.html',
  styleUrls: ['./cinema.components.css']
})
export class CinemaComponent implements OnInit {



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
    private  router: Router

  ) {
  }

  ngOnInit(): void {
    this.getALlCinema();


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


}
