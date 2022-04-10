import { Component, Input, OnInit } from '@angular/core';
import { IUserSignUp } from 'src/app/types/types';

@Component({
  selector: 'app-client-crud-table',
  templateUrl: './client-crud-table.component.html',
  styleUrls: ['./client-crud-table.component.css']
})
export class ClientCrudTableComponent implements OnInit {
  @Input() clients: Array<IUserSignUp> | undefined
  columns: string[] = ['Nom', 'Prénoms', 'Email', 'Actions'];
  constructor() { }

  ngOnInit(): void {
  }

}
