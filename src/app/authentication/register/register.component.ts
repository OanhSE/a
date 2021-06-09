import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

import { FilmService } from '../../_service/film.service';
import { UserService } from '../../_service/user.service';
import validate = WebAssembly.validate;
import { DatePipe } from '@angular/common';
import {User} from '../../_models/user';
import {AlertService} from '../../_service/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({

      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]{10}')]],
      dayOfBirth: ['', Validators.required],
      sex: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(6)]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });
}

// convenience getter for easy access to form fields
// tslint:disable-next-line:typedef
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
checkRePassword(): boolean{
     const pass = this.form.get('pwd').value;
     const repass = this.form.get('pass').value;
     console.log('check', pass + repass);
     if (pass === repass){

       return  true;
     }
     return  false;
}

 onSubmit(): void {
  this.submitted = true;
  if (this.form.invalid) {
      return;
  }
  this.loading = true;
  console.log('this.form.value', this.form.value);
  const email = this.form.get('email').value.toString();
  const phone = this.form.get('phone').value.toString();
  const pwd = this.form.get('pwd').value.toString();
  const role = '1';
  const name = this.form.get('name').value.toString();
  const sex = this.form.get('sex').value.toString();
  const dayOfBirth = new Date(this.form.get('dayOfBirth').value.toString());
  const active = Number(0);
  const status = false;
  const user = new User(email, phone, pwd, role, name, sex, dayOfBirth, active, status);
  this.userService.register(user)
    .pipe(first())
    .subscribe({
          next: (rs) => {
            if (!rs){
              this.alertService.error('Tài khoản này đã tồn tại' );
              this.loading = false;
            }else {
              this.alertService.success('Đăng ký thành công', { keepAfterRouteChange: true });
              const returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
              this.router.navigateByUrl(returnUrl);

            }

          },
          error: error => {

              this.loading = false;
          }
      });
}

}
