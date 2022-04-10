import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';
import { APP_URL } from './../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo = APP_URL + 'assets/logo-removebg.png';


  constructor(private authService: AuthService, private utilsService: UtilsService, private router: Router) { }
  defaultLink:any;

  ngOnInit(): void {
    this.authService.profile().subscribe({
      next: (metadata: any) => {
        const codeProfile = metadata.data.profile.code;
        this.defaultLink = this.utilsService.navbarLinks(codeProfile);
        // console.log('this.defaultLink', this.defaultLink)
      },
      error: (e) => console.error(e),
      complete: () => console.info('login complete')
    });
  }
  showProfile = false;
  toggleProfile() {
    this.showProfile = !this.showProfile;
  }
  showMobile = false;
  toggleMobile(): void {
    this.showMobile = !this.showMobile;
  }

  logout() {
    this.authService.logout().subscribe({
      next: (metadata: any) => {
        this.utilsService.rmToken();
        this.router.navigateByUrl('login');
      },
      error: (e) => console.error(e),
      complete: () => console.info('logout complete')
    });
  }

}
