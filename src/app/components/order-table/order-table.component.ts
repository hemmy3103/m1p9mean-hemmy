import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/types/types';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  columns: string[] = ['Plat', 'Prix', 'Quantité', 'Montant', 'Actions'];
  order: Array<IOrder> = [
    {
      restaurant: 'REST 1',
      dish: 'D 1',
      prix: 54,
      quantity: 76,
      montant: 6556
    },
    {
      restaurant: 'REST 2',
      dish: 'D 2',
      prix: 54,
      quantity: 53,
      montant: 6356
    },
    {
      restaurant: 'REST 3',
      dish: 'D 4',
      prix: 54,
      quantity: 45,
      montant: 6356
    },
    {
      restaurant: 'REST 4',
      dish: 'D 4',
      prix: 54,
      quantity: 445,
      montant: 656
    },
  ];
  total: number = 345454;

  constructor() { }

  ngOnInit(): void {
  }

}
