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
import {Address} from '../../../../_models/address';
import {AddressService} from '../../../../_service/address.service';

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
  address: Address;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cinemaService: CinemaService,
    private addressService: AddressService,
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
      add: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],

    });
    if (!this.data.id) {  this.data.id = 8; }
    this.addressService.getByCinema(this.data.id).subscribe((x) => {
      if (x){
        this.form.controls.add.setValue(x.state);
        this.form.controls.city.setValue(x.city);
        this.form.patchValue(this.data);

      }

    });




  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }


  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    const addressNew = new Address(this.form.controls.city.value , this.form.controls.add.value, 'Việt Nam' );
    this.form.controls.address.setValue(addressNew);
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
