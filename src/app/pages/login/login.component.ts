import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUserLogin } from 'src/app/types/types';
import { UtilsService } from './../../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUserLogin = {
    nomUtilisateur: "",
    mdp: "",
  };
  constructor(private authService: AuthService, private utilsService: UtilsService, private router: Router) { }

  ngOnInit(): void {
    if(this.utilsService.isLoggedIn()) this.router.navigateByUrl('list-restaurant');
  }

  login() {
    this.authService.login(this.user).subscribe({
      next: (metadata: any) => {
        const token = metadata.data.token;
        this.utilsService.setToken(token);
        this.router.navigateByUrl('list-restaurant');
      },
      error: (e) => console.error(e),
      complete: () => console.info('login complete')
    });
  }
}
