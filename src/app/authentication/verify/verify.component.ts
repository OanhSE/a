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
  notification  = 'Xác thực thành công';
  constructor(
    private  route: ActivatedRoute,
    private  alertService: AlertService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const param = params.get('code');
      this.verify(param);
    });
  //   this.currentURL = this.router.url.toString();
  //   this.code = this.currentURL.slice(this.currentURL.indexOf('=') + 1, this.currentURL.length);
   }
verify(code: string): void{
  this.userService.verify(code)
    .pipe(first())
    .subscribe({
      next: () => {
        const returnUrl = '/';
        this.router.navigateByUrl(returnUrl);
      },
      error: error => {
        this.notification = 'Xác thực không thành công' ;
        this.alertService.error('Đăng nhập lỗi' + error);
      }
    });

}

}
