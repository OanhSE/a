import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../_service/user.service';
import {AlertService} from '../../../../_service/alert.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Film} from '../../../../_models/film';
import {first} from 'rxjs/operators';
import {Hall} from '../../../../_models/hall';
import {DatePipe} from '@angular/common';
import {FilmSessionService} from '../../../../_service/film-session.service';
import {FilmSession} from '../../../../_models/filmSession';

@Component({
  selector: 'app-add-filmsession',
  templateUrl: './add-filmsession.component.html',
  styleUrls: ['./add-filmsession.component.css']
})
export class AddFilmsessionComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
   constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private  datePipe: DatePipe,
    private filmSessionService: FilmSessionService,
    private userService: UserService,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<AddFilmsessionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {date: Date, film: Film, hall: Hall}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }




  ngOnInit(): void {
    this.form = this.formBuilder.group({
      film: ['', Validators.required],
      cinema: ['', Validators.required],
      hall: ['', Validators.required],
      date: ['', Validators.required],
      startFrom: ['', Validators.required],
      endTo: ['', Validators.required],
   });
    this.form.controls.film.setValue(this.data.film.name);
    this.form.controls.cinema.setValue(this.data.hall.cinema.name);
    this.form.controls.hall.setValue(this.data.hall.name);
    const datenew = this.datePipe.transform(this.data.date , 'yyyy-MM-dd', 'en');
    this.form.controls.date.setValue(datenew);
  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }

  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    console.log('this.form.value)', this.form.value);
    const  startFrom = this.form.controls.startFrom.value;
    const  endTo = this.form.controls.endTo.value;
    const  filmSession = new FilmSession( this.data.date, this.data.film, this.data.hall, startFrom, endTo);
    this.loading = true;
    this.filmSessionService.addSession(filmSession)
      .pipe(first())
      .subscribe({
        next: () => {
          this.submitted = true;
          this.dialogRef.close();
          this.alertService.success('Thêm thành công');
        },
        error: error => {
          this.submitted = false;
          this.loading = false;
          this.alertService.error('Thêm thất bại');
        }
      });
  }



}
