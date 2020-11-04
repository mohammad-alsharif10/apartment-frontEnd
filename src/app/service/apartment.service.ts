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

  public postApartment(images: string[], apartment: Apartment): Observable<SingleResult<Apartment>> {
    images.forEach(value => {
      this.postApartmentForm.append('images', value, 'images');
    });
    this.postApartmentForm.append('apartment', JSON.stringify(apartment));
    return this.httpClient.post <SingleResult<Apartment>>(Constants.postApartment, this.postApartmentForm, {
      headers: new HttpHeaders().set(Constants.Authorization, localStorage.getItem(Constants.JWT))
    });
  }

  public demo(): Observable<string> {
    return this.httpClient.get<string>('http://127.0.0.1:8080/demo/demo', {
      headers: new HttpHeaders().set(Constants.Authorization, localStorage.getItem(Constants.JWT)),
    });
  }
}
