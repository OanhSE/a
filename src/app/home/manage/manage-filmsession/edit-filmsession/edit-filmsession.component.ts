import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {FilmSessionService} from '../../../../_service/film-session.service';
import {UserService} from '../../../../_service/user.service';
import {AlertService} from '../../../../_service/alert.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FilmSession} from '../../../../_models/filmSession';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-filmsession',
  templateUrl: './edit-filmsession.component.html',
  styleUrls: ['./edit-filmsession.component.css']
})
export class EditFilmsessionComponent implements OnInit {

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
    public dialogRef: MatDialogRef<EditFilmsessionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilmSession) {}

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
    this.form.controls.startFrom.setValue(this.data.startFrom);
    this.form.controls.endTo.setValue(this.data.endTo);
  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }

  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    this.data.startFrom = this.form.controls.startFrom.value;
    this.data.endTo = this.form.controls.endTo.value;
    this.loading = true;
    this.filmSessionService.addSession(this.data)
      .pipe(first())
      .subscribe({
        next: () => {
          this.submitted = true;
          this.dialogRef.close();
          this.alertService.success('Cập nhật thành công');
        },
        error: error => {
          this.submitted = false;
          this.loading = false;
          this.alertService.error('Cập nhật thất bại');
        }
      });
  }


}
