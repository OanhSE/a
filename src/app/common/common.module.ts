import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [ScheduleComponent, AlertComponent],
  imports: [
    CommonRoutingModule,
  ]
})
export class CommonModule { }
