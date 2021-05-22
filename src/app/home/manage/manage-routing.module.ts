import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component'
import { BillComponent } from './bill/bill.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageFilmComponent } from './manage-film/manage-film.component';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { ManageTicketComponent } from './manage-ticket/manage-ticket.component';
import { ReportComponent } from './report/report.component';
import {ManageCinemaComponent} from './manage-cinema/manage-cinema.component';
import {ManageSeatComponent} from './manage-seat/manage-seat.component';
const manageFilmsessionModule = () => import('./manage-filmsession/manage-filmsession.module').then(x => x.ManageFilmsessionModule
);


const routes: Routes = [
  { path: '', component: ManageComponent,
    children: [
      { path: '', component: ManageClientComponent },
      { path: 'bill', component: BillComponent },
      { path: 'category', component: ManageCategoryComponent },
      { path: 'film', component:  ManageFilmComponent },
      { path: 'ticket', component: ManageTicketComponent },
      { path: 'report', component: ReportComponent },
      { path: 'client', component: ManageClientComponent},
      { path: 'cinema', component: ManageCinemaComponent},
      { path: 'seat', component: ManageSeatComponent},
      { path: 'filmsession', loadChildren: manageFilmsessionModule}

    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
