import { Component, OnInit } from '@angular/core';
import { IDish } from 'src/app/types/types';

@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.css']
})
export class ListPlatComponent implements OnInit {
  dishes: Array<IDish> = [
    {
      name: 'A1',
      description: 'A1 description',
      adress: 'By Pass',
      image: '',
      cost: 4588,
      price: 4587
    },
    {
      name: 'B1',
      description: 'B1 description',
      adress: 'By Pass',
      image: '',
      cost: 787877,
      price: 4587
    },
    {
      name: 'F@',
      description: 'F# description',
      adress: 'By Pass',
      image: '',
      cost: 255777,
      price: 4587
    },
    {
      name: 'FE',
      description: 'ER description',
      adress: 'By Pass',
      image: '',
      cost: 787,
      price: 4587
    },
    {
      name: 'TR',
      description: 'TR description',
      adress: 'By Pass',
      image: '',
      cost: 4588,
      price: 58588
    },
    {
      name: 'FE',
      description: 'ER description',
      adress: 'By Pass',
      image: '',
      cost: 877,
      price: 888
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
