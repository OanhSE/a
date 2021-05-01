
import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ManageClientComponent } from '../manage-client.component';
import { Router, ActivatedRoute } from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { FilmService } from './../../../../_service/film.service';
import { UserService } from './../../../../_service/user.service';
import {User} from './../../../../_models/user';
import {DatePipe, formatDate} from '@angular/common';
import { AlertService } from './../../../../_service/alert.service';
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {


  form: FormGroup;
  loading = false;
  submitted = false;
  dateCurrent = new Date();
  date = false;
  isShowErrorDate = false;
  sex: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService,
    private userService: UserService,
    private  datePipe: DatePipe,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<EditClientComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User) {}

  onNoClick(): void {
    this.dialogRef.close();
  }




  ngOnInit(): void {
    this.form = this.formBuilder.group({

      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]{10}')]],
      dayOfBirth: ['', Validators.required],
      sex: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.form.patchValue(this.user);
    const date = this.form.get('dayOfBirth').value;
    this.form.controls.dayOfBirth.setValue(this.datePipe.transform(date , 'yyyy-MM-dd', 'en'));

    this.sex = this.form.get('sex').value;

  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }
  checkDate(): void{

    const birthday = new Date(this.form.get('dayOfBirth').value);
    console.log(birthday);

    const now = new Date();
    const currentYear = now.getFullYear();
    const yearDiff = currentYear - birthday.getFullYear();
    const birthdayThisYear = new Date(currentYear, birthday.getMonth(), birthday.getDate());
    const hasHadBirthdayThisYear = (now >= birthdayThisYear);

    const age = hasHadBirthdayThisYear
      ? yearDiff
      : yearDiff - 1;

    if (age < 18){
      this.isShowErrorDate = true;
    }
    else{
      this.isShowErrorDate = false;
    }

    console.log(age);
    console.log(this.isShowErrorDate);

  }

  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.userService.update(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.submitted = true;
          this.dialogRef.close();
          this.alertService.success('Sửa thành công');
        },
        error: error => {
          this.submitted = false;
          this.loading = false;
          this.alertService.error('Sửa thất bại');
        }
      });
  }


}
