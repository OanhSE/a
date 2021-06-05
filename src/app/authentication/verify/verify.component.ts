import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AlertService} from '../../_service/alert.service';
import {UserService} from '../../_service/user.service';



@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  code: string;
  currentURL: string;
  constructor(
    private  route: ActivatedRoute,
    private  alertService: AlertService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.currentURL = this.router.url.toString();
    this.code = this.currentURL.slice(this.currentURL.indexOf('=') + 1, this.currentURL.length);
    this.verify(this.code);
  }
verify(code: string): void{
  this.userService.verify(code)
    .pipe(first())
    .subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
        this.router.navigateByUrl(returnUrl);
      },
      error: error => {
        this.alertService.error('Đăng nhập lỗi' + error);
      }
    });

}

}
