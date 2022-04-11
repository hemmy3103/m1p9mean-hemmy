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
      nom: 'A1',
      description: 'A1 description',
      adress: 'By Pass',
      cout: 4588,
      prix: 4587,
      visible: true
    },
    {
      nom: 'B1',
      description: 'B1 description',
      adress: 'By Pass',
      cout: 787877,
      prix: 4587,
      visible: true
    },
    {
      nom: 'F@',
      description: 'F# description',
      adress: 'By Pass',
      cout: 255777,
      prix: 4587,
      visible: true
    },
    {
      nom: 'FE',
      description: 'ER description',
      adress: 'By Pass',
      cout: 787,
      prix: 4587,
      visible: true
    },
    {
      nom: 'TR',
      description: 'TR description',
      adress: 'By Pass',
      cout: 4588,
      prix: 58588,
      visible: false
    },
    {
      nom: 'FE',
      description: 'ER description',
      adress: 'By Pass',
      cout: 877,
      prix: 888,
      visible: false
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
