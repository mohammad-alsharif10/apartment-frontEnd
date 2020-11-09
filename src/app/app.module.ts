import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthComponent} from './component/auth/auth.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApartmentListComponent} from './component/apartment/apartment-list/apartment-list.component';
import {ApartmentItemComponent} from './component/apartment/apartment-item/apartment-item.component';
import {ApartmentDetailsComponent} from './component/apartment/apartment-details/apartment-details.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {AppRoutingModule} from './module/app-routing.module';
import {ApartmentListResolver} from './guard/apartment-list-resolver';
import {NavbarComponent} from './component/navbar/navbar.component';
import {ProfileComponent} from './component/profile/profile.component';
import {ApartmentCreateComponent} from './component/apartment/apartment-create/apartment-create.component';
import {AuthInterceptor} from './guard/auth-interceptor';
import {jqxBarGaugeModule} from 'jqwidgets-ng/jqxbargauge';
import {jqxLoaderModule} from 'jqwidgets-ng/jqxloader';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ApartmentListComponent,
    ApartmentItemComponent,
    ApartmentDetailsComponent,
    NotFoundComponent,
    NavbarComponent,
    ProfileComponent,
    ApartmentCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    jqxBarGaugeModule,
    jqxLoaderModule,

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
