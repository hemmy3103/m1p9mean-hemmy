import { Component, Input, OnInit } from '@angular/core';
import { IDish } from 'src/app/types/types';

@Component({
  selector: 'app-dishes-crud-table',
  templateUrl: './dishes-crud-table.component.html',
  styleUrls: ['./dishes-crud-table.component.css']
})
export class DishesCrudTableComponent implements OnInit {
  @Input() dishes: IDish[] = [] ;
  columns: string[] = ['Nom', 'Description', 'Cout', 'Prix', 'Visible', 'Actions'];
  constructor() { }

  ngOnInit(): void {
  }

}
