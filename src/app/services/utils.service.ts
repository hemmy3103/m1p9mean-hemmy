import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  clientLink = [
    { nom: 'Restaurants', link: '/restaurants' },
    { nom: 'Plats', link: '/dishes' },
    { nom: 'Comandes', link: '/order-detail' },
  ]
  restaurantLink = [
    { nom: 'Comandes', link: '/restaurant/orders' },
    { nom: 'Plats', link: '/restaurant/dishes' },
    { nom: 'Bénéfice', link: '/restaurant/benefice' },
  ]
  livreurLink = [
    { nom: 'Comandes', link: '/livreur/orders' },
    { nom: 'Livraisons', link: '/livreur/delivered' },
  ]
  responsableLink = [
    { nom: 'Comandes', link: '/responsable/orders' },
    { nom: 'Restaurants', link: '/responsable/restaurants' },
    { nom: 'Clients', link: '/responsable/clients' },
    { nom: 'Bénéfice', link: '/responsable/benefice' },
  ]

  constructor() { }

  navbarLinks(codeProfile: number) {
    if (codeProfile === 1) return this.clientLink
    if (codeProfile === 2) return this.restaurantLink
    if (codeProfile === 3) return this.livreurLink
    else return this.responsableLink
  }

  redirect(codeProfile: number) {
    if (codeProfile === 1) return '/restaurants'
    if (codeProfile === 2) return '/restaurant/orders'
    if (codeProfile === 3) return '/livreur/orders'
    else return '/responsable/orders'
  }

  getOptions(authorization: boolean) {
    const options: any = {};
    options['headers'] = {};
    options['headers']['Content-Type'] = 'application/json';
    if (authorization) options['headers']['Authorization'] = 'Bearer ' + this.getToken();
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
