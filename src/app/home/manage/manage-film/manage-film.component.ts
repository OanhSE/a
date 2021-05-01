import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UserService } from './../../../_service/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddFilmComponent } from './add-film/add-film.component';
import { MatFormFieldControl, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { first } from 'rxjs/operators';
import { AlertService } from './../../../_service/alert.service';
import { Route, Router } from '@angular/router';
import { Film } from 'src/app/_models/film';
import { FilmService } from 'src/app/_service/film.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-manage-film',
  templateUrl: './manage-film.component.html',
  styleUrls: ['./manage-film.component.css'],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MatFormFieldControl, useExisting: ManageFilmComponent}
  ]
})
export class ManageFilmComponent implements OnInit {

  films: Film[] ;
  name: string;
  dataSource ;

  constructor(
    // private userService: UserService,
    private filmService: FilmService,
    public dialog: MatDialog,
    private  alertService: AlertService,
    private  router: Router,

  ) { }

  ngOnInit(): void {
    this.getFilms();
    this.dataSource = new MatTableDataSource<Film>(this.films);

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddFilmComponent, {
      height: 'auto',
      width: '600px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialogeEdit(film: Film): void {
    const dialogRef = this.dialog.open(EditFilmComponent, {
      height: 'auto',
      width: '600px',
      data : film
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  getFilms(): void{
    this.filmService.getAll().subscribe((result) => {
      this.films = result;
    });
  }
  delete(film: Film): void{
    this.filmService.deleteFilm(film.id)
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
