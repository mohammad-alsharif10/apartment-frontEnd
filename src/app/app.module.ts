import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthComponent} from './component/auth/auth.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApartmentListComponent} from './component/apartment/apartment-list/apartment-list.component';
import {ApartmentItemComponent} from './component/apartment/apartment-item/apartment-item.component';
import {ApartmentDetailsComponent} from './component/apartment/apartment-details/apartment-details.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {AppRoutingModule} from './module/app-routing.module';
import {ApartmentListResolver} from './guard/apartment-list-resolver';
import {NavbarComponent} from './component/navbar/navbar.component';
import {ProfileComponent} from './component/profile/profile.component';
import {ApartmentCreateComponent} from './component/apartment/apartment-create/apartment-create.component';


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
    AppRoutingModule
  ],
  providers: [ApartmentListResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
