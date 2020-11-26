import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ApartmentListComponent} from './apartment-list/apartment-list.component';
import {AuthGuard} from '../auth/service/auth.guard';
import {ApartmentCreateComponent} from './apartment-create/apartment-create.component';
import {ApartmentListResolver} from './service/apartment-list-resolver';


const apartmentRouts: Routes = [
  {
    path: '',
    component: ApartmentListComponent,
    canActivate: [AuthGuard],
    resolve: {apartmentPageResult: ApartmentListResolver}
  },
  {
    path: 'post-apartment',
    component: ApartmentCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'apartments',
    component: ApartmentListComponent,
    canActivate: [AuthGuard],
    resolve: {apartmentPageResult: ApartmentListResolver}
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(apartmentRouts)
  ],
  exports: [
    RouterModule
  ]
})
export class ApartmentRoutingModule {
}
