import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  
  @Input()  color: string = String('primary');
  @Output() private ratingUpdated = new EventEmitter();

   snackBarDuration: number = Number(2000);


  constructor(private snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
   
  }
  onClick(): void {
    this.color = String('accent');
  }

 

}
export enum StarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}