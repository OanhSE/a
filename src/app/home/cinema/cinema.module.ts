import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { CinemaComponent } from './cinema.component';
import { ListCinemaComponent } from './list-cinema/list-cinema.component';
import {MatIconModule} from '@angular/material/icon';
import { TicketPriceComponent } from './ticket-price/ticket-price.component';


@NgModule({
  declarations: [
    // CinemaComponent,
    // ListCinemaComponent
  TicketPriceComponent],
    imports: [
        CommonModule,
        CinemaRoutingModule,
        MatIconModule
    ]
})
export class CinemaModule { }
