import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthComponent} from './component/auth/auth.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {ApartmentListResolver} from './component/apartment/service/apartment-list-resolver';
import {ProfileComponent} from './component/profile/profile.component';
import {AuthInterceptor} from './component/auth/service/auth-interceptor';
import {ApartmentModule} from './component/apartment/apartment.module';
import {SharedModule} from './shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ApartmentModule,
    AppRoutingModule,
  ],
  providers: [ApartmentListResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
