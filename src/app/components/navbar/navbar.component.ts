import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
