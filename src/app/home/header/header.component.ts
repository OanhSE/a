import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_service/user.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AlertService} from '../../_service/alert.service';
@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
  templateUrl: './header.components.html',
  styleUrls: ['./header.components.css']
})
export class HeaderComponent implements OnInit {
  user: User = new User('', '', '', '', '', '', new Date(), 0, false);
  constructor(
    private userService: UserService,
    private  router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {
    // this.user = this.accountService.user;
    this.userService.user.subscribe(x => this.user = x);
  }
  ngOnInit(): void {
  }
  tranferManage(): void{
    this.router.navigate(['/manage']);
  }
  tranferPageHome(): void{
    this.router.navigate(['/home']);
  }
  tranferPageFilm(): void{
    this.router.navigate(['/']);
  }
  tranferPageCinema(): void{
    this.router.navigate(['/cinema']);
  }
  tranferPageSale(): void{
    this.router.navigate(['/manage']);
  }
  tranferPageTicket(): void{
    this.router.navigate(['/book-ticket']);
  }
  tranferPageBill(): void{
    this.router.navigate(['/checkout']);
  }
  tranferPageGift(): void{
    this.router.navigate(['/manage']);
  }
  tranferPageRegister(): void{
    this.router.navigate(['../authen/register']);
  }
  tranferPageLogin(): void{
    this.router.navigate(['../authen/login']);
  }
  logout(): void{
    this.userService.logOut(this.user)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log('logout');
        },
        error: error => {
          this.alertService.error('Đăng xuất lỗi' + error);
        }
      });
  }


}
