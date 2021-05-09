import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageFilmsessionRoutingModule } from './manage-filmsession-routing.module';
import { ManageFilmsessionComponent } from './manage-filmsession.component';
import {ManageModule} from '../manage.module';


@NgModule({
  declarations: [ManageFilmsessionComponent],
    imports: [
        CommonModule,
        ManageFilmsessionRoutingModule,
        ManageModule
    ]
})
export class ManageFilmsessionModule { }
