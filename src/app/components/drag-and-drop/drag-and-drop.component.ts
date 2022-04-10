import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IOrder } from 'src/app/types/types';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {
  orders: Array<IOrder> = [
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
  orders1: Array<IOrder> = [
    {
      restaurant: '11111REST 1',
      dish: 'D 1',
      price: 54,
      quantity: 76,
      cout: 43,
      montant: 6556,
      visible: true,
      dateOrder: new Date()
    },
    {
      restaurant: '111111REST 2',
      dish: 'D 2',
      price: 54,
      cout: 43,
      quantity: 53,
      montant: 6356,
      visible: true,
      dateOrder: new Date()
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<IOrder[]>) {

    if (event.previousContainer !== event.container) {

      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)

    } else {
      moveItemInArray(this.orders, event.previousIndex, event.currentIndex);
    }
  }
}
