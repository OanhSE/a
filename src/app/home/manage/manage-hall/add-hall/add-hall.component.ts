import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../../../_service/film.service';
import {UserService} from '../../../../_service/user.service';
import {AlertService} from '../../../../_service/alert.service';
import {SeatService} from '../../../../_service/seat.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Film} from '../../../../_models/film';
import {first} from 'rxjs/operators';
import {AddSeatComponent} from '../../manage-seat/add-seat/add-seat.component';
import {Cinema} from '../../../../_models/cinema';
import {HallService} from '../../../../_service/hall.service';
import {Hall} from '../../../../_models/hall';
import {CinemaService} from '../../../../_service/cinema.service';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrls: ['./add-hall.component.css']
})
export class AddHallComponent implements OnInit {

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
      cinema: ['', Validators.required],
      name: ['', Validators.required],
      row: ['', Validators.required],
      column: ['', Validators.required],
    });
  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }
 onSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    console.log('this.form.value)', this.form.value);
    this.loading = true;
    const name = this.form.value.name;
    const cinema = Number(this.form.value.cinema);
    const description = '';
    const status = Number(0);
    const totalRow = this.form.value.row;
    const totalColumn = this.form.value.column;
    this.cinemaService.getById(cinema).subscribe((rs) => {
      const hall: Hall = new Hall(name, description, rs, status, totalRow, totalColumn);
      this.hallService.addHall(cinema, hall)
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
 });
}



}
