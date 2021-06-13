import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageFilmsessionRoutingModule } from './manage-filmsession-routing.module';
import { ManageFilmsessionComponent } from './manage-filmsession.component';
import {ManageModule} from '../manage.module';
import { AddFilmsessionComponent } from './add-filmsession/add-filmsession.component';
import { EditFilmsessionComponent } from './edit-filmsession/edit-filmsession.component';


@NgModule({
  declarations: [ManageFilmsessionComponent, AddFilmsessionComponent, EditFilmsessionComponent],
    imports: [
        CommonModule,
        ManageFilmsessionRoutingModule,
        ManageModule
    ]
})
export class ManageFilmsessionModule { }
