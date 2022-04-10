import { Component, OnInit } from '@angular/core';
import { IDish } from 'src/app/types/types';

@Component({
  selector: 'app-restaurant-dishes',
  templateUrl: './restaurant-dishes.component.html',
  styleUrls: ['./restaurant-dishes.component.css']
})
export class RestaurantDishesComponent implements OnInit {
  dishes: Array<IDish> = [
    {
      name: 'A1',
      description: 'A1 description',
      adress: 'By Pass',
      image: '',
      cost: 4588,
      price: 4587,
      visible: true
    },
    {
      name: 'B1',
      description: 'B1 description',
      adress: 'By Pass',
      image: '',
      cost: 787877,
      price: 4587,
      visible: true
    },
    {
      name: 'F@',
      description: 'F# description',
      adress: 'By Pass',
      image: '',
      cost: 255777,
      price: 4587,
      visible: true
    },
    {
      name: 'FE',
      description: 'ER description',
      adress: 'By Pass',
      image: '',
      cost: 787,
      price: 4587,
      visible: true
    },
    {
      name: 'TR',
      description: 'TR description',
      adress: 'By Pass',
      image: '',
      cost: 4588,
      price: 58588,
      visible: false
    },
    {
      name: 'FE',
      description: 'ER description',
      adress: 'By Pass',
      image: '',
      cost: 877,
      price: 888,
      visible: false
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
