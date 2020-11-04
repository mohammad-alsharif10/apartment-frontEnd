import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../../model/LoginRequest';
import {AuthService} from '../../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {stringify} from 'querystring';
import {Constants} from '../../utils/Constants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.loginRequest)
      .subscribe(
        value => {
          console.log(value);
          localStorage.setItem(Constants.JWT, value.data.authenticationToken);
          localStorage.setItem(Constants.USERNAME, value.data.username);
          localStorage.setItem(Constants.EXPIRES_AT, stringify(value.data.expiresAt));
          this.router.navigate(['/apartments'])
            .then(_ => {
            });
        },
        error => console.log(error.error)
      );
  }
}
