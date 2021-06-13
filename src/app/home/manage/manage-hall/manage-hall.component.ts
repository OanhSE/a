import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {AlertService} from '../../../_service/alert.service';
import {Router} from '@angular/router';
import {HallService} from '../../../_service/hall.service';
import {AddHallComponent} from './add-hall/add-hall.component';
import {CinemaService} from '../../../_service/cinema.service';
import {Cinema} from '../../../_models/cinema';
import {Hall} from '../../../_models/hall';
import {EditHallComponent} from './edit-hall/edit-hall.component';

@Component({
  selector: 'app-manage-hall',
  templateUrl: './manage-hall.component.html',
  styleUrls: ['./manage-hall.component.css']
})
export class ManageHallComponent implements OnInit {
  listHCM ;
  listTNB;
  listDNB;
  listNMT;
  listBMT;
  listDBTB;
  listDBSH;
  listHN;
  listHall: Hall[];
  name: string;
  dataSource ;
  cinema: Cinema;

  constructor(
    public dialog: MatDialog,
    private  alertService: AlertService,
    private  router: Router,
    private hallService: HallService,
    private cinamaService: CinemaService

  ) { }

  ngOnInit(): void {
    this.getALlCinema();
  }
  tranferBySingle(c: Cinema): void{
    this.cinema = c;
    this.hallService.getHallByCinema(c.id).subscribe((result) => {
      this.listHall = result;
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
  openDialog(): void {
    const dialogRef = this.dialog.open(AddHallComponent, {
      height: 'auto',
      width: '600px',
      data: {id: this.cinema.id, name: this.cinema.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openDialogeEditHall(hall: Hall): void {
    const dialogRef = this.dialog.open(EditHallComponent, {
      height: 'auto',
      width: '600px',
      data: hall
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteHall(hall: Hall): void{

  }
}
