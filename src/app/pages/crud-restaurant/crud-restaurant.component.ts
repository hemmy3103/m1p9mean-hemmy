import { Component, Input, OnInit } from '@angular/core';
import { IRestaurant } from 'src/app/types/types';

@Component({
  selector: 'app-crud-restaurant',
  templateUrl: './crud-restaurant.component.html',
  styleUrls: ['./crud-restaurant.component.css']
})
export class CrudRestaurantComponent implements OnInit {
  restaurants: Array<IRestaurant> = [
    {
      name: 'Gastro',
      description: 'Gastro description',
      adress: 'By Pass',
      image: ''
    },
    {
      name: 'KFC',
      description: 'KFC description',
      adress: 'By Pass',
      image: ''
    },
    {
      name: 'Samiflow',
      description: 'Samiflow description',
      adress: 'By Pass',
      image: ''
    },
    {
      name: 'Bogota',
      description: 'Bogota description',
      adress: 'By Pass',
      image: ''
    },
    {
      name: 'H2',
      description: 'H2 description',
      adress: 'By Pass',
      image: ''
    },
    {
      name: 'B1',
      description: 'B1 description',
      adress: 'By Pass',
      image: ''
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
