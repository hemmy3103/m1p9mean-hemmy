import { Component, Input, OnInit } from '@angular/core';
import { IDish } from 'src/app/types/types';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent implements OnInit {
  @Input() dish: IDish | undefined;
  @Input() identity: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
