import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PageResult} from '../../../model/PageResult';
import {Apartment} from '../../../model/Apartment';
import {Observable} from 'rxjs';
import {ApartmentService} from './apartment.service';
import {tap} from 'rxjs/operators';

@Injectable()
export class ApartmentListResolver implements Resolve<PageResult<Apartment>> {

  constructor(private apartmentService: ApartmentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<PageResult<Apartment>>
    | Promise<PageResult<Apartment>>
    | PageResult<Apartment> {
    return this.apartmentService.apartmentPage().pipe(tap(value => console.log(value)));
  }
}
