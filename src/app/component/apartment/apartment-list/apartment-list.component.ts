import {Component, OnInit} from '@angular/core';
import {PageResult} from '../../../model/PageResult';
import {Apartment} from '../../../model/Apartment';
import {ApartmentService} from '../service/apartment.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  apartmentPageResult: PageResult<Apartment> = new PageResult<Apartment>();
  values: number[] = [102, 115, 130, 137];

  constructor(private apartmentService: ApartmentService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
    this.apartmentPageResult = this.activatedRoute.snapshot.data.apartmentPageResult;
  }


}
