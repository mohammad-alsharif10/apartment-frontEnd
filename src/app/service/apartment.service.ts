import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Apartment} from '../model/Apartment';
import {Observable} from 'rxjs';
import {SingleResult} from '../model/SingleResult';
import {Constants} from '../utils/Constants';
import {PageResult} from '../model/PageResult';

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
    return this.httpClient.post <SingleResult<Apartment>>(Constants.postApartment, this.postApartmentForm);
  }

  public findApartment(apartmentId: number): Observable<SingleResult<Apartment>> {
    return this.httpClient.get <SingleResult<Apartment>>(Constants.findApartment);
  }

  public apartmentPage(): Observable<PageResult<Apartment>> {
    const params = new HttpParams()
      .set('page', '0')
      .set('size', '10');
    return this.httpClient.get<PageResult<Apartment>>(Constants.apartmentPage, {
      params
    });
  }


}
