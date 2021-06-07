import { Component, OnInit } from '@angular/core';
import Icon from '@material-ui/core/Icon';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/_service/user.service';
@Component({
  selector: 'app-manage',
  // templateUrl: './manage.component.html',
  // styleUrls: ['./manage.component.css']
  templateUrl: './manage.components.html',
  styleUrls: ['./manage.components.css']
})
export class ManageComponent implements OnInit {

  constructor(private userService: UserService, private  router: Router) { }

  ngOnInit(): void {
  }

  tranferClient(): void{
    this.router.navigate(['/manage/client']);
  }
  tranferBill(): void{
    this.router.navigate(['/manage/bill']);
  }
  tranferHall(): void{
    this.router.navigate(['/manage/hall']);
  }
  tranferFilm(): void{
    this.router.navigate(['/manage/film']);
  }
  tranferTicket(): void{
    this.router.navigate(['/manage/ticket']);
  }
  tranferReport(): void{
    this.router.navigate(['/manage/report']);
  }
  tranferCinema(): void{
    this.router.navigate(['/manage/cinema']);
  }
  tranferFilmSession(): void{
    this.router.navigate(['/manage/filmsession']);
  }
  tranferSeat(): void {
    this.router.navigate(['/manage/seat']);
  }

}
