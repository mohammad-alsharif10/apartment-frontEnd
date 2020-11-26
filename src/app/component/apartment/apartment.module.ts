import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApartmentRoutingModule} from './apartment-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ApartmentCreateComponent} from './apartment-create/apartment-create.component';
import {ApartmentListComponent} from './apartment-list/apartment-list.component';
import {ApartmentItemComponent} from './apartment-item/apartment-item.component';
import {ApartmentDetailsComponent} from './apartment-details/apartment-details.component';
import {SharedModule} from '../../modules/shared.module';
import {jqxLoaderModule} from 'jqwidgets-ng/jqxloader';
import {jqxBarGaugeModule} from 'jqwidgets-ng/jqxbargauge';


@NgModule({
  declarations: [
    ApartmentCreateComponent,
    ApartmentListComponent,
    ApartmentItemComponent,
    ApartmentDetailsComponent
  ],
  imports: [
    CommonModule,
    ApartmentRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    jqxLoaderModule,
    jqxBarGaugeModule
  ]
})
export class ApartmentModule {
}
