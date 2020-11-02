import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from '../component/auth/auth.component';
import {ApartmentListComponent} from '../component/apartment/apartment-list/apartment-list.component';
import {NotFoundComponent} from '../component/not-found/not-found.component';
import {AuthGuard} from '../guard/auth.guard';
import {ApartmentListResolver} from '../guard/apartment-list-resolver';
import {ProfileComponent} from '../component/profile/profile.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ApartmentListComponent,
    canActivate: [AuthGuard],
    resolve: {apartmentPageResult: ApartmentListResolver}
  },
  {
    path: 'signin',
    component: AuthComponent
  },
  {
    path: 'signup',
    component: AuthComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'apartments',
    component: ApartmentListComponent,
    canActivate: [AuthGuard],
    resolve: {apartmentPageResult: ApartmentListResolver}
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
