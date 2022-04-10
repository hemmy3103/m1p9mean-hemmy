import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { CodeRecuperationComponent } from './pages/code-recuperation/code-recuperation.component';
import { ListPlatComponent } from './pages/list-plat/list-plat.component';
import { ListRestaurantComponent } from './pages/list-restaurant/list-restaurant.component';
import { ListeCommandeComponent } from './pages/liste-commande/liste-commande.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RestaurantBenenficeComponent } from './pages/restaurant-benenfice/restaurant-benenfice.component';
import { RestaurantDishesComponent } from './pages/restaurant-dishes/restaurant-dishes.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: CodeRecuperationComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'restaurants', component: ListRestaurantComponent },
  { path: 'dishes', component: ListPlatComponent },
  { path: 'order-detail', component: OrderDetailComponent },

  { path: 'restaurant/orders', component: ListeCommandeComponent },
  { path: 'restaurant/dishes', component: RestaurantDishesComponent },
  { path: 'restaurant/benefice', component: RestaurantBenenficeComponent },

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
