import { Component, OnInit } from '@angular/core';
import { IUserSignUp } from './../../types/types';
import { AuthService } from './../../services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: IUserSignUp = {
    nomUtilisateur: "",
    mdp: "",
    nom: "",
    prenom: "",
  };

  constructor(private authService: AuthService, private utilsService: UtilsService, private router: Router) { }

  ngOnInit(): void {
    if(this.utilsService.isLoggedIn()) this.router.navigateByUrl('login');
  }

  signUp() {
    console.log('this.user', this.user)
    this.authService.signUp(this.user).subscribe({
      next: (metadata: any) => {
        const token = metadata.data.token;
        this.utilsService.setToken(token);
        this.router.navigateByUrl('login');
      },
      error: (e) => console.error(e),
      complete: () => console.info('signUp complete')
    });
  }
}
