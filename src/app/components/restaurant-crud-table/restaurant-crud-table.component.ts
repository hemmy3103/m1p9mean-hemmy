import { Component, Input, OnInit } from '@angular/core';
import { IRestaurant } from 'src/app/types/types';

@Component({
  selector: 'app-restaurant-crud-table',
  templateUrl: './restaurant-crud-table.component.html',
  styleUrls: ['./restaurant-crud-table.component.css']
})
export class RestaurantCrudTableComponent implements OnInit {
  @Input() restaurants: Array<IRestaurant> | undefined
  columns: string[] = ['Nom', 'Description', 'Adress', 'Actions'];
  constructor() { }

  ngOnInit(): void {
  }

}
