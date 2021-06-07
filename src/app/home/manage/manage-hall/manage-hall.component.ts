import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {AlertService} from '../../../_service/alert.service';
import {Router} from '@angular/router';
import {HallService} from '../../../_service/hall.service';
import {AddHallComponent} from './add-hall/add-hall.component';

@Component({
  selector: 'app-manage-hall',
  templateUrl: './manage-hall.component.html',
  styleUrls: ['./manage-hall.component.css']
})
export class ManageHallComponent implements OnInit {

  name: string;
  dataSource ;

  constructor(
    public dialog: MatDialog,
    private  alertService: AlertService,
    private  router: Router,
    private hallService: HallService,

  ) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddHallComponent, {
      height: 'auto',
      width: '600px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
