import {Component, OnInit} from '@angular/core';
import {Apartment} from '../../../model/Apartment';
import {ApartmentService} from '../../../service/apartment.service';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  styleUrls: ['./apartment-create.component.css']
})
export class ApartmentCreateComponent implements OnInit {

  apartment: Apartment = new Apartment();
  images: string[] = [];
  imagesMap: Map<string, string> = new Map<string, string>();

  constructor(private apartmentService: ApartmentService) {
  }

  ngOnInit(): void {
  }

  onFileChanged(event): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < event.target.files.length; i++) {
      this.images.push(event.target.files[i]);
      this.imagesMap.set(event.target.files[i].name, event.target.files[i]);
    }
  }

  postApartment(): void {
    this.apartmentService.postApartment(this.imagesMap, this.apartment).subscribe(value => {
      console.log(value);
    });
  }


}
