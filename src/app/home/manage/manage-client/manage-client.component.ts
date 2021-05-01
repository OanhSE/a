import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UserService } from './../../../_service/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddClientComponent } from './add-client/add-client.component';
import { MatFormFieldControl, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { EditClientComponent } from './edit-client/edit-client.component';
import { first } from 'rxjs/operators';
import { AlertService } from './../../../_service/alert.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.css'],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MatFormFieldControl, useExisting: ManageClientComponent}
  ]
})
export class ManageClientComponent implements OnInit {
  users: User[] ;
  animal: string;
  name: string;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private  alertService: AlertService,
    private  router: Router,

  ) { }

  ngOnInit(): void {
    this.getUsers();

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddClientComponent, {
      height: 'auto',
      width: '600px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
  openDialogeEdit(user: User): void {
    const dialogRef = this.dialog.open(EditClientComponent, {
      height: 'auto',
      width: '600px',
      data : user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  getUsers(): void{
    this.userService.getUsers().subscribe((result) => {
      this.users = result;
    });
  }
  delete(user: User): void{
    this.userService.deleteById(user.id)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success(' Xoá thành công', { keepAfterRouteChange: true });
        },
        error: error => {
          this.alertService.error('Xóa thất bại');

        }
      });
  }

}
