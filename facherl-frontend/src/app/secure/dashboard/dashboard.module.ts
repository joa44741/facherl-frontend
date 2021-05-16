import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedCommonModule } from 'src/app/shared/shared-common/shared-common.module';
import { NgxsModule } from '@ngxs/store';
import { DashboardState } from './dashboard.state';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedCommonModule,
    NgxsModule.forFeature([DashboardState]),
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
