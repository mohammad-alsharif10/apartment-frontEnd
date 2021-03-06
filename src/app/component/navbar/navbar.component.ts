import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/service/auth.service';
import {Router} from '@angular/router';
import {Constants} from '../../utils/Constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }


  goToProfile(): void {
    this.router.navigate(['/profile']).then(value => console.log(value));
  }

  goToPostApartment(): void {
    this.router.navigate(['/post-apartment']).then(value => console.log(value));
  }

  logout(): void {
    localStorage.setItem(Constants.JWT, '');
    this.router.navigate(['/signin']).then(value => console.log(value));
  }


  goToHome(): void {
    this.router.navigate(['/']).then(value => console.log(value));
  }
}
