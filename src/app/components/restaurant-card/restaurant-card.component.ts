import { Component, Input, OnInit } from '@angular/core';
import { IRestaurant } from 'src/app/types/types';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurant:IRestaurant | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log('this.restaurant', this.restaurant)
  }
}
