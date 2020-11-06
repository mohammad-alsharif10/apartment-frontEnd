import {AuthenticationResponse} from '../model/AuthenticationResponse';

export class Constants {
  public static readonly baseUrl: string = 'http://127.0.0.1:8080/';
  public static readonly signup: string = Constants.baseUrl + 'auth/signup';
  public static readonly signin: string = Constants.baseUrl + 'auth/signin';
  public static readonly postApartment: string = 'http://127.0.0.1:8080/apartment/post-apartment';

  public static authenticationResponse: AuthenticationResponse;
  public static readonly Authorization: string = 'Authorization';
  public static readonly JWT: string = 'JWT';
  public static readonly USERNAME: string = 'username';
  public static readonly EXPIRES_AT: string = 'expiresAt';
  public static readonly deleteApartment: string = 'http://localhost:8080/apartment/delete/1';
  public static readonly findApartment: string = 'http://localhost:8080/apartment/find/1';
  public static readonly apartmentPage: string = 'http://localhost:8080/apartment/apartment-list';


}
