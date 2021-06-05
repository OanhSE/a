import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [ScheduleComponent, AlertComponent],
  imports: [
    CommonModule,
    CommonRoutingModule
  ]
})
export class CommonModule { }
