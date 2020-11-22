import {Component, OnInit, ViewChild} from '@angular/core';
import {Apartment} from '../../../model/Apartment';
import {ApartmentService} from '../../../service/apartment.service';
import {jqxLoaderComponent} from 'jqwidgets-ng/jqxloader';
import {Router} from '@angular/router';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  styleUrls: ['./apartment-create.component.css']
})
export class ApartmentCreateComponent implements OnInit {

  apartment: Apartment = new Apartment();
  images: string[] = [];
  imagesMap: Map<string, string> = new Map<string, string>();
  @ViewChild('jqxLoader') jqxLoader: jqxLoaderComponent;

  constructor(private apartmentService: ApartmentService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onFileChanged(event): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < event.target.files.length; i++) {
      this.imagesMap.set(event.target.files[i].name, event.target.files[i]);
    }
  }

  postApartment(): void {
    this.jqxLoader.open();
    this.apartmentService.postApartment(this.imagesMap, this.apartment).subscribe(value => {
      this.jqxLoader.close();
      this.router.navigate(['/apartments'])
        .then(_ => {
        });
      console.log(value);
    }, error => {
      this.jqxLoader.close();
    });
  }


}
