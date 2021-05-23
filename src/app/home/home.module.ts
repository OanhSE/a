import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldControl, MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PaymentComponent } from './payment/payment.component';
import { FilmSingleComponent } from './film-single/film-single.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CinemaComponent } from './cinema/cinema.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import {ListCinemaComponent} from './cinema/list-cinema/list-cinema.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';




@NgModule({

  declarations: [HeaderComponent, FooterComponent, ContainerComponent,
    HomeComponent, StarRatingComponent, PaymentComponent, FilmSingleComponent,
    CinemaComponent, CheckOutComponent, UserProfileComponent, OrderHistoryComponent, ListCinemaComponent, BookTicketComponent ],
  exports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    // MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatIconModule,
        // MatFormFieldModule,
        MatButtonModule,
        MatTooltipModule,
        MatGridListModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatExpansionModule,
        FormsModule

    ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MatFormFieldControl, useExisting: HomeModule}
  ]
})
export class HomeModule { }
