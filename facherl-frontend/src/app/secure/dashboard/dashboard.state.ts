import { Selector, State, StateContext } from '@ngxs/store';
import {
  Receiver,
  EmitterAction,
  Emitter,
  Emittable,
} from '@ngxs-labs/emitter';
import { DashboardService } from './dashboard.service';
import { Injectable, Injector } from '@angular/core';
import { TopProduct } from './types/top-product.type';
import { switchMap, tap } from 'rxjs/operators';

export interface DashboardStateModel {
  loading: boolean;
  topProducts: TopProduct[];
}

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    loading: false,
    topProducts: [],
  },
})
@Injectable()
export class DashboardState {
  private static dashboardService: DashboardService;

  @Emitter(DashboardState.setLoading)
  private static emitLoading?: Emittable<boolean>;

  constructor(injector: Injector) {
    DashboardState.dashboardService = injector.get<DashboardService>(
      DashboardService
    );
  }

  @Receiver()
  public static setLoading(
    { patchState }: StateContext<DashboardStateModel>,
    { payload }: EmitterAction<boolean>
  ) {
    patchState({ loading: payload });
  }

  @Receiver()
  public static loadDashboardData(
    { patchState }: StateContext<DashboardStateModel>,
    action: EmitterAction<void>
  ) {
    return this.emitLoading?.emit(true).pipe(
      switchMap(() => this.dashboardService.getTopProducts()),
      tap((response) => patchState({ topProducts: response })),
      tap(() => this.emitLoading?.emit(false))
    );
  }

  @Selector()
  static loading(state: DashboardStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static topProducts(state: DashboardStateModel): TopProduct[] {
    return state.topProducts;
  }
}
