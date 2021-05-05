import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageFilmsessionRoutingModule } from './manage-filmsession-routing.module';
import { ManageFilmsessionComponent } from './manage-filmsession.component';


@NgModule({
  declarations: [ManageFilmsessionComponent],
  imports: [
    CommonModule,
    ManageFilmsessionRoutingModule
  ]
})
export class ManageFilmsessionModule { }
