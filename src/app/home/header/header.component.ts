import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_service/user.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private  router: Router) {
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
    this.router.navigate(['/film']);
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


}
