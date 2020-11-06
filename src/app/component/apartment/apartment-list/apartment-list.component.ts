import {Component, OnInit} from '@angular/core';
import {PageResult} from '../../../model/PageResult';
import {Apartment} from '../../../model/Apartment';
import {ApartmentService} from '../../../service/apartment.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  apartmentPageResult: PageResult<Apartment> = new PageResult<Apartment>();

  constructor(private apartmentService: ApartmentService) {
  }

  ngOnInit(): void {
    this.apartmentService.apartmentPage().subscribe(value => this.apartmentPageResult = value);
  }


}
