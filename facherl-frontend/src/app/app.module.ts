import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedCommonModule } from './shared/shared-common/shared-common.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { NgxsStoreModule } from './shared/store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedCommonModule,
    AuthenticationModule,
    NgxsStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
