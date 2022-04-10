import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-recuperation',
  templateUrl: './code-recuperation.component.html',
  styleUrls: ['./code-recuperation.component.css']
})
export class CodeRecuperationComponent implements OnInit {
  code: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  validerCode(){

  }

}
