import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';




@NgModule({
    declarations: [ScheduleComponent ],
    exports: [],
    imports: [
        CommonRoutingModule,
    ]
})
export class CommonModule { }
