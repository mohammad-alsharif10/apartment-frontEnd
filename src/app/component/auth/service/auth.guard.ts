import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Constants} from '../../../utils/Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const jwt = localStorage.getItem(Constants.JWT);
    const jwtDontExist = jwt === '' || jwt === undefined || jwt === 'null';
    if (jwtDontExist) {
      this.router.navigate(['/signin']).then(value => console.log(value));
      return false;
    }
    return true;
  }

}
