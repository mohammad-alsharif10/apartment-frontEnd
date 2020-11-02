export class Constants {
  public static readonly baseUrl: string = 'http://127.0.0.1:8080/';
  public static readonly signup: string = Constants.baseUrl + 'auth/signup';
  public static readonly signin: string = Constants.baseUrl + 'auth/signin';

  public static jwt: string;
  public static readonly Authorization: string = 'Authorization';
}
