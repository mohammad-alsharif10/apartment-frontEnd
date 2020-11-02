import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PageResult} from '../model/PageResult';
import {Apartment} from '../model/Apartment';
import {Observable} from 'rxjs';

@Injectable()
export class ApartmentListResolver implements Resolve<PageResult<Apartment>> {

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<PageResult<Apartment>> | Promise<PageResult<Apartment>> | PageResult<Apartment> {
    const page = new PageResult<Apartment>();
    const apartment = new Apartment(4);
    page.data.push(apartment);
    console.log('this is the page resolver');
    console.log(page);
    return page;
  }
}
