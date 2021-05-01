import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ManageFilmComponent } from '../manage-film.component';
import { Router, ActivatedRoute } from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { FilmService } from './../../../../_service/film.service';
import { UserService } from './../../../../_service/user.service';
import {User} from './../../../../_models/user';
import { AlertService } from './../../../../_service/alert.service';
import { Film } from 'src/app/_models/film';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  dateCurrent = new Date();
  date = false;
  isShowErrorDate = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService,
    private userService: UserService,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<AddFilmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Film) {}

  onNoClick(): void {
    this.dialogRef.close();
  }




  ngOnInit(): void {
    this.form = this.formBuilder.group({
    name: ['', Validators.required],
    duration: ['', Validators.required],
    genres: ['', Validators.required],
    actor: ['', Validators.required],
    year: ['', Validators.required],
    startFrom: ['', Validators.required],
    language: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    urltrailer: ['', Validators.required],



    });
  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }
  checkDate(): void{

    // const birthday = new Date(this.form.get('dayOfBirth').value);
    // console.log(birthday);
    //
    // const now = new Date();
    // const currentYear = now.getFullYear();
    // const yearDiff = currentYear - birthday.getFullYear();
    // const birthdayThisYear = new Date(currentYear, birthday.getMonth(), birthday.getDate());
    // const hasHadBirthdayThisYear = (now >= birthdayThisYear);
    //
    // const age = hasHadBirthdayThisYear
    //   ? yearDiff
    //   : yearDiff - 1;

    if (true){
      this.isShowErrorDate = false;
    }
    else{
      this.isShowErrorDate = true;
    }



  }

  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    console.log('this.form.value)', this.form.value);
    this.loading = true;
    this.filmService.addFilm(this.form.value)
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
