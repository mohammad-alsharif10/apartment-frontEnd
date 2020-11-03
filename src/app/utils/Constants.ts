import {AuthenticationResponse} from '../model/AuthenticationResponse';

export class Constants {
  public static readonly baseUrl: string = 'http://127.0.0.1:8080/';
  public static readonly signup: string = Constants.baseUrl + 'auth/signup';
  public static readonly signin: string = Constants.baseUrl + 'auth/signin';
  public static readonly postApartment: string = Constants.baseUrl + 'apartment/post-apartment';

  public static authenticationResponse: AuthenticationResponse;
  public static readonly Authorization: string = 'Authorization';
}
