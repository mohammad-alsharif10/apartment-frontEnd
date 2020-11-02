import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../../model/LoginRequest';
import {AuthService} from '../../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

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
          this.authService.isLoggedIn = true;
          this.router.navigate(['/apartments'])
            .then(_ => {
            });
        },
        error => console.log(error.error)
      );
  }
}
