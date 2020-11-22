import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginRequest} from '../../model/LoginRequest';
import {AuthService} from '../../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {stringify} from 'querystring';
import {Constants} from '../../utils/Constants';
import {jqxLoaderComponent} from 'jqwidgets-ng/jqxloader';
import {AuthenticationResponse} from '../../model/AuthenticationResponse';
import {SingleResult} from '../../model/SingleResult';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();
  @ViewChild('jqxLoader') jqxLoader: jqxLoaderComponent;

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.jqxLoader.open();
    this.authService.login(this.loginRequest)
      .subscribe(
        value => {
          this.handleSuccessLoginResponse(value);
        },
        error => console.log(error.error)
      );
  }

  private handleSuccessLoginResponse(authenticationResponse: SingleResult<AuthenticationResponse>): void {
    console.log(authenticationResponse);
    this.jqxLoader.close();
    localStorage.setItem(Constants.JWT, authenticationResponse.data.authenticationToken);
    localStorage.setItem(Constants.USERNAME, authenticationResponse.data.username);
    localStorage.setItem(Constants.EXPIRES_AT, stringify(authenticationResponse.data.expiresAt));
    this.router.navigate(['/apartments'])
      .then(_ => {
      });
  }
}
