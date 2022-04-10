import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/types/types';

@Component({
  selector: 'app-order-delivery-table',
  templateUrl: './order-delivery-table.component.html',
  styleUrls: ['./order-delivery-table.component.css']
})
export class OrderDeliveryTableComponent implements OnInit {
  columns: string[] = ['Plat', 'Adresse', 'Quantité', 'Montant', 'Actions'];
  order: Array<IOrder> = [
    {
      restaurant: 'REST 1',
      dish: 'D 1',
      price: 54,
      quantity: 76,
      montant: 6556,
      adressDelivery: 'HUF DD'
    },
    {
      restaurant: 'REST 2',
      dish: 'D 2',
      price: 54,
      quantity: 53,
      montant: 6356,
      adressDelivery: 'HfsdfUF DD'
    },
    {
      restaurant: 'REST 3',
      dish: 'D 4',
      price: 54,
      quantity: 45,
      montant: 6356,
      adressDelivery: 'gdsgfd DD'
    },
    {
      restaurant: 'REST 4',
      dish: 'D 4',
      price: 54,
      quantity: 445,
      montant: 656,
      adressDelivery: 'gdsg DD'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
