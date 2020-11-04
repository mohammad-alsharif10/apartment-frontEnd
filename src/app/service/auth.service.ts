import {Injectable} from '@angular/core';
import {LoginRequest} from '../model/LoginRequest';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../utils/Constants';
import {AuthenticationResponse} from '../model/AuthenticationResponse';
import {SingleResult} from '../model/SingleResult';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public login(loginRequest: LoginRequest): Observable<SingleResult<AuthenticationResponse>> {
    return this.httpClient
      .post<SingleResult<AuthenticationResponse>>(Constants.signin, loginRequest);
  }
}
