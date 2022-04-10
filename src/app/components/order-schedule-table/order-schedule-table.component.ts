import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/types/types';

@Component({
  selector: 'app-order-schedule-table',
  templateUrl: './order-schedule-table.component.html',
  styleUrls: ['./order-schedule-table.component.css']
})
export class OrderScheduleTableComponent implements OnInit {
  columns: string[] = ['Plat', 'Prix d\'achat', 'Prix de vent', 'Date commande', 'A prépaper'];
  order: Array<IOrder> = [
    {
      restaurant: 'REST 1',
      dish: 'D 1',
      price: 54,
      quantity: 76,
      cout: 43,
      montant: 6556,
      visible: true,
      dateOrder: new Date()
    },
    {
      restaurant: 'REST 2',
      dish: 'D 2',
      price: 54,
      cout: 43,
      quantity: 53,
      montant: 6356,
      visible: true,
      dateOrder: new Date()
    },
    {
      restaurant: 'REST 3',
      dish: 'D 4',
      price: 54,
      quantity: 45,
      cout: 7,
      montant: 6356,
      visible: false,
      dateOrder: new Date()
    },
    {
      restaurant: 'REST 4',
      dish: 'D 4',
      price: 54,
      cout: 56,
      quantity: 445,
      montant: 656,
      visible: true,
      dateOrder: new Date()
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
