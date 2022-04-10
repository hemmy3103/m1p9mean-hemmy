import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/types/types';

@Component({
  selector: 'app-order-delivered-table',
  templateUrl: './order-delivered-table.component.html',
  styleUrls: ['./order-delivered-table.component.css']
})
export class OrderDeliveredTableComponent implements OnInit {
  etat:string = 'Livré'
  columns: string[] = ['Plat', 'Adresse', 'Quantité', 'Montant', 'Date', 'Etat'];
  order: Array<IOrder> = [
    {
      restaurant: 'REST 1',
      dish: 'D 1',
      price: 54,
      quantity: 76,
      montant: 6556,
      adressDelivery: 'HUF DD',
      dateDelivery: new Date()
    },
    {
      restaurant: 'REST 2',
      dish: 'D 2',
      price: 54,
      quantity: 53,
      montant: 6356,
      adressDelivery: 'HfsdfUF DD',
      dateDelivery: new Date()
    },
    {
      restaurant: 'REST 3',
      dish: 'D 4',
      price: 54,
      quantity: 45,
      montant: 6356,
      adressDelivery: 'gdsgfd DD',
      dateDelivery: new Date()
    },
    {
      restaurant: 'REST 4',
      dish: 'D 4',
      price: 54,
      quantity: 445,
      montant: 656,
      adressDelivery: 'gdsg DD',
      dateDelivery: new Date()
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
