import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { ManageFilmComponent } from './manage-film/manage-film.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageTicketComponent } from './manage-ticket/manage-ticket.component';
import { ReportComponent } from './report/report.component';
import { BillComponent } from './bill/bill.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldControl, MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddClientComponent } from './manage-client/add-client/add-client.component';
import { AddFilmComponent } from './manage-film/add-film/add-film.component';
import { AddCategoryComponent } from './manage-category/add-category/add-category.component';
import { AddTicketComponent } from './manage-ticket/add-ticket/add-ticket.component';
import { EditClientComponent } from './manage-client/edit-client/edit-client.component';
import { EditFilmComponent } from './manage-film/edit-film/edit-film.component';
import { EditCategoryComponent } from './manage-category/edit-category/edit-category.component';
import { EditTicketComponent } from './manage-ticket/edit-ticket/edit-ticket.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import { ManageCinemaComponent } from './manage-cinema/manage-cinema.component';
import { AddCinemaComponent } from './manage-cinema/add-cinema/add-cinema.component';
import { EditCinemaComponent } from './manage-cinema/edit-cinema/edit-cinema.component';
import { ManageHallComponent } from './manage-hall/manage-hall.component';
import { AddHallComponent } from './manage-hall/add-hall/add-hall.component';
import { EditHallComponent } from './manage-hall/edit-hall/edit-hall.component';
import { ManageSeatComponent } from './manage-seat/manage-seat.component';
import { AddSeatComponent } from './manage-seat/add-seat/add-seat.component';
import { EditSeatComponent } from './manage-seat/edit-seat/edit-seat.component';
@NgModule({
  declarations: [ManageComponent, ManageClientComponent, ManageFilmComponent, ManageCategoryComponent, ManageTicketComponent, ReportComponent, BillComponent, AddClientComponent, AddFilmComponent, AddCategoryComponent, AddTicketComponent, EditClientComponent, EditFilmComponent, EditCategoryComponent, EditTicketComponent, ManageCinemaComponent, AddCinemaComponent, EditCinemaComponent, ManageHallComponent, AddHallComponent, EditHallComponent, ManageSeatComponent, AddSeatComponent, EditSeatComponent],
  exports: [
    CommonModule,
    ManageRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    // MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,

  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    MatIconModule,
    // MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddClientComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MatFormFieldControl, useExisting: ManageModule},
    { provide: DatePipe}
  ]
})
export class ManageModule { }
