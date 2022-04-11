import { Component, OnInit } from '@angular/core';
import { IRestaurant } from './../../types/types';
import { RestaurantService } from './../../services/restaurant.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  // restaurants: Array<IRestaurant> = [
  //   {
  //     name: 'Gastro',
  //     description: 'Gastro description',
  //     adress: 'By Pass',
  //     cout: ''
  //   },
  //   {
  //     name: 'KFC',
  //     description: 'KFC description',
  //     adress: 'By Pass',
  //     cout: ''
  //   },
  //   {
  //     name: 'Samiflow',
  //     description: 'Samiflow description',
  //     adress: 'By Pass',
  //     cout: ''
  //   },
  //   {
  //     name: 'Bogota',
  //     description: 'Bogota description',
  //     adress: 'By Pass',
  //     cout: ''
  //   },
  //   {
  //     name: 'H2',
  //     description: 'H2 description',
  //     adress: 'By Pass',
  //     cout: ''
  //   },
  //   {
  //     name: 'B1',
  //     description: 'B1 description',
  //     adress: 'By Pass',
  //     cout: ''
  //   },

  // ];

  restaurants: Array<IRestaurant> = []
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.restaurants().subscribe({
      next: (metadata: any) => {
        // console.log('metadata', metadata);
        this.restaurants = metadata.data;
      },
      error: (e) => console.error(e),
    });
  }

}
