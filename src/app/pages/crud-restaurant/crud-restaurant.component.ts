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
      nom: 'Gastro',
      description: 'Gastro description',
      adress: 'By Pass',
      img: ''
    },
    {
      nom: 'KFC',
      description: 'KFC description',
      adress: 'By Pass',
      img: ''
    },
    {
      nom: 'Samiflow',
      description: 'Samiflow description',
      adress: 'By Pass',
      img: ''
    },
    {
      nom: 'Bogota',
      description: 'Bogota description',
      adress: 'By Pass',
      img: ''
    },
    {
      nom: 'H2',
      description: 'H2 description',
      adress: 'By Pass',
      img: ''
    },
    {
      nom: 'B1',
      description: 'B1 description',
      adress: 'By Pass',
      img: ''
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
