import { Component, OnInit } from '@angular/core';
import { Emittable, Emitter, EmitterAction } from '@ngxs-labs/emitter';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DashboardState } from './dashboard.state';
import { TopProduct } from './types/top-product.type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  @Emitter(DashboardState.loadDashboardData) loadDashboardData?: Emittable<void>;
  @Select(DashboardState.loading) loading$?: Observable<boolean>;
  @Select(DashboardState.topProducts) topProducts$?: Observable<TopProduct[]>;

  constructor() {}

  ngOnInit(): void {
    this.loadDashboardData?.emit();
  }
}
