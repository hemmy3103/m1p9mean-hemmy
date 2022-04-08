import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const button = document.querySelector('#menu-button');
    // const menu = document.querySelector('#menu');
    // button?.addEventListener('click', () => {
    //   menu?.classList.toggle('hidden');
    // });

  }
  showProfile = false;
  toggleProfile(){
    this.showProfile = !this.showProfile;
  }

  showMobile = false;
  toggleMobile(): void {
    this.showMobile = !this.showMobile;
  }
}
