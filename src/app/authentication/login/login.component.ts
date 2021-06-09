import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { FilmService } from '../../_service/film.service';
import { UserService } from '../../_service/user.service';
import {User} from '../../_models/user';
import {AlertService} from '../../_service/alert.service';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public recentToken = '';
    user: User;
    form: FormGroup;
    loading = false;
    submitted = false;
  constructor(
    private userService: UserService,
    private filmService: FilmService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    public dialog: MatDialog,


    ) {
    // this.user = this.accountService.user;
    this.userService.user.subscribe(x => this.user = x);

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail: ['', Validators.required],
      pwd: ['', Validators.required],
  });
  }
  get f(): {[p: string]: AbstractControl}{
      return this.form.controls;
  }

  onSubmit(): void{


    this.submitted = true;
    this.alertService.clear();


    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    this.loading = true;
    this.userService.login(this.f.mail.value, this.f.pwd.value)
        .pipe(first())
        .subscribe({
            next: (rs) => {
              if (!rs){
                this.alertService.error('Tài khoản này không tồn tại' );
                this.loading = false;
              }else {
                this.alertService.success('Đăng nhập thành công', { keepAfterRouteChange: true });
                const returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
                this.router.navigateByUrl(returnUrl);

              }
            },
            error: error => {
              this.alertService.error('Đăng nhập lỗi' + error);
              this.loading = false;
            }
        });
}

}
