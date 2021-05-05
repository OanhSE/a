import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageFilmsessionComponent} from './manage-filmsession.component';


const routes: Routes = [
  {
    path: '', component: ManageFilmsessionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageFilmsessionRoutingModule { }
