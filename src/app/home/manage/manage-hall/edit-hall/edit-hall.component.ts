import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CinemaService} from '../../../../_service/cinema.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../_service/user.service';
import {AlertService} from '../../../../_service/alert.service';
import {HallService} from '../../../../_service/hall.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AddSeatComponent} from '../../manage-seat/add-seat/add-seat.component';
import {Cinema} from '../../../../_models/cinema';
import {Hall} from '../../../../_models/hall';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-hall',
  templateUrl: './edit-hall.component.html',
  styleUrls: ['./edit-hall.component.css']
})
export class EditHallComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  dateCurrent = new Date();
  date = false;
  isShowErrorDate = false;

  constructor(
    private cinamaService: CinemaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cinemaService: CinemaService,
    private userService: UserService,
    private alertService: AlertService,
    private hallService: HallService,
    public dialogRef: MatDialogRef<AddSeatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hall) {}

  onNoClick(): void {
    this.dialogRef.close();
  }




  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      totalRow: [0, Validators.required],
      totalColumn: [0, Validators.required],
    });
    this.form.patchValue(this.data);
  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }
  checkRow(): boolean{
    const  row = this.form.get('totalRow').value;
    if ( (Number(row) > 10) || (Number(row) < 5) ){
      return  false;
    }
    return  true;
  }
  checkColumn(): boolean{
    const  column = this.form.get('totalColumn').value;
    if ( (Number(column) > 10) || (Number(column) < 5) ){
      return  false;
    }
    return  true;
  }
  onSubmit(): void {

    this.submitted = true;
    if (this.form.invalid || !this.checkColumn() || !this.checkRow()) {
      return;
    }
    console.log('this.form.value)', this.form.value);
    this.loading = true;
    const name = this.form.value.name;
    const cinema = Number(this.data.id);
    const totalRow = this.form.value.totalRow;
    const totalColumn = this.form.value.totalColumn;

    this.data.name = name;
    this.data.totalRow = totalRow;
    this.data.totalColumn = totalColumn;
    this.hallService.addHall(cinema, this.data)
        .pipe(first())
        .subscribe({
          next: () => {
            this.submitted = true;
            this.dialogRef.close();
            this.alertService.success('Cập nhật thành công');
          },
          error: error => {
            this.submitted = false;
            this.loading = false;
            this.alertService.error('Cập nhật thất bại');
          }
        });
}



}
