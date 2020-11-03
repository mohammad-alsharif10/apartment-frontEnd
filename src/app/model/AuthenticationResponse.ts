import {BasicModel} from './BasicModel';

export class AuthenticationResponse extends BasicModel {
  public authenticationToken: string;
  public refreshToken: string;
  public expiresAt: Date;
  public username: string;


}
