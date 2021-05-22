import { Component, OnInit } from '@angular/core';
import {Film} from '../../../_models/film';
import {FilmService} from '../../../_service/film.service';
import {MatDialog} from '@angular/material/dialog';
import {AlertService} from '../../../_service/alert.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {AddFilmComponent} from '../manage-film/add-film/add-film.component';
import {EditFilmComponent} from '../manage-film/edit-film/edit-film.component';
import {first} from 'rxjs/operators';
import {SeatService} from '../../../_service/seat.service';
import {Seat} from '../../../_models/seat';
import {AddSeatComponent} from './add-seat/add-seat.component';
import {EditSeatComponent} from './edit-seat/edit-seat.component';

@Component({
  selector: 'app-manage-seat',
  templateUrl: './manage-seat.component.html',
  styleUrls: ['./manage-seat.component.css']
})
export class ManageSeatComponent implements OnInit {

  films: Film[] ;
  seats: Seat[];
  name: string;
  dataSource ;

  constructor(
    // private userService: UserService,
    private filmService: FilmService,
    public dialog: MatDialog,
    private  alertService: AlertService,
    private  router: Router,
    private seatService: SeatService,

  ) { }

  ngOnInit(): void {
    this.getSeats();
    this.dataSource = new MatTableDataSource<Seat>(this.seats);

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddSeatComponent, {
      height: 'auto',
      width: '600px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialogeEdit(seat: Seat): void {
    const dialogRef = this.dialog.open(EditSeatComponent, {
      height: 'auto',
      width: '600px',
      data : seat
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  getSeats(): void{
    this.seatService.getAll().subscribe((result) => {
      this.seats = result;
    });
  }
  delete(seat: Seat): void {
    console.log('delete seat:');
  }

}
