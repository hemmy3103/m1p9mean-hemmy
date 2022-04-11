import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUserLogin } from 'src/app/types/types';
import { APP_URL } from 'src/environments/environment';
import { UtilsService } from './../../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo:string = './assets/logo.png';
  user: IUserLogin = {
    nomUtilisateur: "",
    mdp: "",
  };
  constructor(private authService: AuthService, private utilsService: UtilsService, private router: Router) { }

  ngOnInit(): void {
    if(this.utilsService.isLoggedIn()) {
      this.authService.profile().subscribe({
        next: (metadata: any) => {
          console.log('metadata', metadata)
          const codeProfile = metadata.data.profile.code;
          const url = this.utilsService.redirect(codeProfile);
          console.log('redirect()', url)
          this.router.navigateByUrl(url);
        },
        error: (e) => console.error(e),
        complete: () => console.info('login complete')
      });
    }
  }

  resetPassword() {
    this.authService.login(this.user).subscribe({
      next: (metadata: any) => {
        const token = metadata.data.token;
        this.utilsService.setToken(token);
        this.authService.profile().subscribe({
          next: (metadata: any) => {
            const codeProfile = metadata.data.profile.code;
            const url = this.utilsService.redirect(codeProfile);
            console.log('redirect()', url)
            this.router.navigateByUrl(url);
          },
          error: (e) => console.error(e),
          complete: () => console.info('login complete')
        });
      },
      error: (e) => console.error(e),
      complete: () => console.info('login complete')
    });
  }

  login() {
    this.authService.login(this.user).subscribe({
      next: (metadata: any) => {
        const token = metadata.data.token;
        this.utilsService.setToken(token);
        this.authService.profile().subscribe({
          next: (metadata: any) => {
            const codeProfile = metadata.data.profile.code;
            const url = this.utilsService.redirect(codeProfile);
            console.log('redirect()', url)
            this.router.navigateByUrl(url);
          },
          error: (e) => console.error(e),
          complete: () => console.info('login complete')
        });
      },
      error: (e) => console.error(e),
      complete: () => console.info('login complete')
    });
  }
}
