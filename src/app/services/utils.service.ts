import { Injectable } from '@angular/core';
import { TOKEN } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getOptions(authorization: boolean) {
    const options: any = {};
    options['headers'] = {};
    options['headers']['Content-Type'] = 'application/json';
    if (authorization) options['headers']['Authorization'] = this.getToken();
    return options;
  }

  isLoggedIn() {
    return !!(this.getToken());
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  setToken(tkn: string) {
    localStorage.setItem(TOKEN, tkn);
  }

  rmToken() {
    localStorage.removeItem(TOKEN);
  }
}
