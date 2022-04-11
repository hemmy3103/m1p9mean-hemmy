import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private utilsService: UtilsService) { }

  restaurants() {
    const options = this.utilsService.getOptions(true);
    const body = {
      search: "",
      pageNumber: 1,
      nPerPage: 10,
      crt: {
      }
    }
    return this.http.post(`${BASE_URL}restaurants`, body, options);
  }
}
