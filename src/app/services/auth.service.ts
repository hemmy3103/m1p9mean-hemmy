import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { IUserLogin, IUserSignUp } from '../types/types';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private utilsService: UtilsService) { }

  profile() {
    const options = this.utilsService.getOptions(true);
    return this.http.get(`${BASE_URL}auth/profile`, options);
  }

  signUp(user: IUserSignUp) {
    const options = this.utilsService.getOptions(false);
    const body = { utilisateur: user }
    return this.http.post(`${BASE_URL}auth/sign-up`, JSON.stringify(body), options);
  }

  login(user: IUserLogin) {
    const options = this.utilsService.getOptions(false);
    return this.http.post(`${BASE_URL}auth/login`, JSON.stringify(user), options);
  }

  logout() {
    const options = this.utilsService.getOptions(true);
    return this.http.delete(`${BASE_URL}auth/logout`, options);
  }
}
