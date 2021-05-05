import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../../../_service/film.service';
import {UserService} from '../../../../_service/user.service';
import {AlertService} from '../../../../_service/alert.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Film} from '../../../../_models/film';
import {first} from 'rxjs/operators';
import {CinemaService} from '../../../../_service/cinema.service';
import {Cinema} from '../../../../_models/cinema';

@Component({
  selector: 'app-edit-cinema',
  templateUrl: './edit-cinema.component.html',
  styleUrls: ['./edit-cinema.component.css']
})
export class EditCinemaComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  dateCurrent = new Date();
  date = false;
  isShowErrorDate = false;
  Areas = ['0001', '0002', '0003', '0004', '0005', '0006', '0007', '0008'];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cinemaService: CinemaService,
    private userService: UserService,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<EditCinemaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cinema) {}

  onNoClick(): void {
    this.dialogRef.close();
  }




  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      area: ['', Validators.required],
      addressId: ['', Validators.required],

    });
    this.form.patchValue(this.data);
  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }


  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.cinemaService.addCinema(this.form.value)
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
