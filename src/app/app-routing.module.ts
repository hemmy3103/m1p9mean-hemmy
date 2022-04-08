import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { ListRestaurantComponent } from './pages/list-restaurant/list-restaurant.component';
import { ListeCommandeComponent } from './pages/liste-commande/liste-commande.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'list-restaurant', component: ListRestaurantComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list-commande', component: ListeCommandeComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 1
    }
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
