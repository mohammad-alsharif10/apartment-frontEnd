import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PageResult} from '../../../model/PageResult';
import {Apartment} from '../../../model/Apartment';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  apartmentPageResult: PageResult<Apartment>;

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.apartmentPageResult = this.activatedRoute.snapshot.data.apartmentPageResult;
    console.log(this.apartmentPageResult);
    this.authService.isLoggedIn = false;
    this.router.navigate(['/signin']).then(value => console.log(value));
  }
}
