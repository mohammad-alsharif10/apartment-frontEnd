import {BasicModel} from './BasicModel';

export class AuthenticationResponse extends BasicModel {
  private authenticationToken: string;
  private refreshToken: string;
  private expiresAt: Date;
  private username: string;


  constructor(id: number, authenticationToken: string, refreshToken: string, expiresAt: Date, username: string) {
    super(id);
    this.authenticationToken = authenticationToken;
    this.refreshToken = refreshToken;
    this.expiresAt = expiresAt;
    this.username = username;
  }
}
