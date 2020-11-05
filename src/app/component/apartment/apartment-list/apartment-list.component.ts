import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PageResult} from '../../../model/PageResult';
import {Apartment} from '../../../model/Apartment';
import {Constants} from '../../../utils/Constants';
import {HttpClient} from '@angular/common/http';
import {ApartmentService} from '../../../service/apartment.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  apartmentPageResult: PageResult<Apartment>;

  constructor(private authService: AuthService,
              private apartmentService: ApartmentService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.apartmentPageResult = this.activatedRoute.snapshot.data.apartmentPageResult;
    console.log(this.apartmentPageResult);
    localStorage.setItem(Constants.JWT, '');
    this.router.navigate(['/signin']).then(value => console.log(value));
  }

  deleteApartment(): void {
    this.apartmentService.findApartment(1)
      .subscribe(value => {
        console.log('the apartment');
        console.log(value);
      }, error => {
        console.log(error.error);
      });
  }
}
