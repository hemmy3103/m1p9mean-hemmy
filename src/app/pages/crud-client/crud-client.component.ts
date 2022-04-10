import { Component, OnInit } from '@angular/core';
import { IUserSignUp } from './../../types/types';

@Component({
  selector: 'app-crud-client',
  templateUrl: './crud-client.component.html',
  styleUrls: ['./crud-client.component.css']
})
export class CrudClientComponent implements OnInit {
  clients: Array<IUserSignUp> = [
    {
      nom: 'Ramananjato',
      prenom: 'Hemmy',
      nomUtilisateur: 'hemmy@gmail.com'
    },
    {
      nom: '63',
      prenom: 'fdsg',
      nomUtilisateur: 'hemgsdfgmy@gmail.com'
    },
    {
      nom: 'fgs',
      prenom: 'Hemfgsmy',
      nomUtilisateur: 'hemmy@sgfdgs.com'
    },
    {
      nom: 'sgsf',
      prenom: 'Hemgfmy',
      nomUtilisateur: 'hemmy@gfds.com'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
