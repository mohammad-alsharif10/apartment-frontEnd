import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Apartment} from '../model/Apartment';
import {Observable} from 'rxjs';
import {SingleResult} from '../model/SingleResult';
import {Constants} from '../utils/Constants';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  postApartmentForm: FormData = new FormData();

  constructor(private httpClient: HttpClient) {
  }

  public postApartment(images: Map<string, string>, apartment: Apartment): Observable<SingleResult<Apartment>> {

    images.forEach((value, key) => {
      this.postApartmentForm.append('images', value, key);
    });
    this.postApartmentForm.append('apartment', JSON.stringify(apartment));
    return this.httpClient.post <SingleResult<Apartment>>(Constants.postApartment, this.postApartmentForm, {
      headers: new HttpHeaders().set(Constants.Authorization, localStorage.getItem(Constants.JWT))
    });
  }

  public findApartment(apartmentId: number): Observable<SingleResult<Apartment>> {
    return this.httpClient.get <SingleResult<Apartment>>(Constants.findApartment);
  }


}
