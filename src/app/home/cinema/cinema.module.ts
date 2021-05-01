import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { CinemaComponent } from './cinema.component';
import { ListCinemaComponent } from './list-cinema/list-cinema.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    // CinemaComponent,
    // ListCinemaComponent
  ],
    imports: [
        CommonModule,
        CinemaRoutingModule,
        MatIconModule
    ]
})
export class CinemaModule { }
