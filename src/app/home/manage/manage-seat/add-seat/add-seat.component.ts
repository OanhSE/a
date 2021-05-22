import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../../../_service/film.service';
import {UserService} from '../../../../_service/user.service';
import {AlertService} from '../../../../_service/alert.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Film} from '../../../../_models/film';
import {first} from 'rxjs/operators';
import {SeatService} from '../../../../_service/seat.service';

@Component({
  selector: 'app-add-seat',
  templateUrl: './add-seat.component.html',
  styleUrls: ['./add-seat.component.css']
})
export class AddSeatComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  dateCurrent = new Date();
  date = false;
  isShowErrorDate = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService,
    private userService: UserService,
    private alertService: AlertService,
    private seatService: SeatService,
    public dialogRef: MatDialogRef<AddSeatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Film) {}

  onNoClick(): void {
    this.dialogRef.close();
  }




  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hall: ['', Validators.required],
      row: ['', Validators.required],
      column: ['', Validators.required],
});
  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }
  checkDate(): void{

    if (true){
      this.isShowErrorDate = false;
    }
    else{
      this.isShowErrorDate = true;
    }



  }

  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    console.log('this.form.value)', this.form.value);
    this.loading = true;
    this.seatService.addSeat(this.form.value.hall, this.form.value.row, this.form.value.column)
      .pipe(first())
      .subscribe({
        next: () => {
          this.submitted = true;
          this.dialogRef.close();
          this.alertService.success('Thêm thành công');
        },
        error: error => {
          this.submitted = false;
          this.loading = false;
          this.alertService.error('Thêm thất bại');
        }
      });
  }


}
