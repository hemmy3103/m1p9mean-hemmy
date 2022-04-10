import { Component, OnInit } from '@angular/core';
import { IRestaurant } from './../../types/types';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
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

  // rowsCount(){
  //   const rows = Math.floor(this.listRestaurant.length/4);
  //   const numbers = Array(rows).fill(null).map((x,i)=>i);
  //   numbers.push(1);
  //   console.log('rows', rows)
  //   console.log('numbers', numbers)
  //   return numbers;
  // }

}
