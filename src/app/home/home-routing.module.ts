import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home.component';
import { FilmSingleComponent } from './film-single/film-single.component';
import { CinemaComponent } from './cinema/cinema.component';
import { CheckOutComponent } from './check-out/check-out.component';
import {BookTicketComponent} from './book-ticket/book-ticket.component';
const manageModule = () => import('./manage/manage.module').then(x => x.ManageModule);
const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    { path: '', component: ContainerComponent },
    { path: 'home', component: ContainerComponent },
    { path: 'film-single', component: FilmSingleComponent },
    { path: 'cinema', component: CinemaComponent },
    { path: 'checkout', component: CheckOutComponent },
    { path: 'book-ticket', component: BookTicketComponent },
    { path: 'manage', loadChildren:  manageModule },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
