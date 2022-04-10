import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from 'src/app/types/types';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() order: IOrder | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
