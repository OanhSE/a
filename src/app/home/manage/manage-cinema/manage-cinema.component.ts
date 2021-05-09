import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddCinemaComponent } from './add-cinema/add-cinema.component';
import { MatFormFieldControl, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { EditCinemaComponent } from './edit-cinema/edit-cinema.component';
import { first } from 'rxjs/operators';
import { AlertService } from './../../../_service/alert.service';
import { Route, Router } from '@angular/router';
import { Cinema } from 'src/app/_models/cinema';
import { CinemaService } from 'src/app/_service/cinema.service';
import { MatTableDataSource } from '@angular/material/table';
import {Edit} from '@material-ui/icons';

@Component({
  selector: 'app-manage-cinema',
  templateUrl: './manage-cinema.component.html',
  styleUrls: ['./manage-cinema.component.css'],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MatFormFieldControl, useExisting: ManageCinemaComponent}
  ]
})
export class ManageCinemaComponent implements OnInit {


  cinemas: Cinema[] ;
  name: string;
  dataSource ;

  constructor(
    // private userService: UserService,
    private cinemaService: CinemaService,
    public dialog: MatDialog,
    private  alertService: AlertService,
    private  router: Router,

  ) { }

  ngOnInit(): void {
    this.getCinemas();
    this.dataSource = new MatTableDataSource<Cinema>(this.cinemas);

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddCinemaComponent, {
      height: 'auto',
      width: '600px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialogeEdit(cinema: Cinema): void {
    const dialogRef = this.dialog.open(EditCinemaComponent, {
      height: 'auto',
      width: '600px',
      data : cinema ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  getCinemas(): void{
    this.cinemaService.getAll().subscribe((result) => {
      this.cinemas = result;
      console.log('cinemas', result);
    });
  }
  delete(cinema: Cinema): void{
    this.cinemaService.deleteCinema(cinema.id)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success(' Xoá thành công', { keepAfterRouteChange: true });
        },
        error: error => {
          this.alertService.error('Xóa thất bại');

        }
      });
  }

}
