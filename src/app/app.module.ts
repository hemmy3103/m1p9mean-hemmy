import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ListRestaurantComponent } from './pages/list-restaurant/list-restaurant.component';
import { ListeCommandeComponent } from './pages/liste-commande/liste-commande.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { CodeRecuperationComponent } from './pages/code-recuperation/code-recuperation.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { HeaderComponent } from './components/header/header.component';
import { ListPlatComponent } from './pages/list-plat/list-plat.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { AddToCardModalComponent } from './components/add-to-card-modal/add-to-card-modal.component';
import { UpAndDownNumberComponent } from './components/up-and-down-number/up-and-down-number.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { OrderScheduleTableComponent } from './components/order-schedule-table/order-schedule-table.component';
import { OrderStoryComponent } from './components/order-story/order-story.component';
import { SwitchToogleComponent } from './components/switch-toogle/switch-toogle.component';
import { RestaurantDishesComponent } from './pages/restaurant-dishes/restaurant-dishes.component';
import { DishesCrudTableComponent } from './components/dishes-crud-table/dishes-crud-table.component';
import { DishModalAddComponent } from './components/dish-modal-add/dish-modal-add.component';
import { DishModalEditComponent } from './components/dish-modal-edit/dish-modal-edit.component';
import { RestaurantBenenficeComponent } from './pages/restaurant-benenfice/restaurant-benenfice.component';
import { OrderAssignComponent } from './pages/order-assign/order-assign.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { CrudRestaurantComponent } from './pages/crud-restaurant/crud-restaurant.component';
import { RestaurantCrudTableComponent } from './components/restaurant-crud-table/restaurant-crud-table.component';
import { RestaurantModalEditComponent } from './components/restaurant-modal-edit/restaurant-modal-edit.component';
import { RestaurantModalAddComponent } from './components/restaurant-modal-add/restaurant-modal-add.component';
import { CrudClientComponent } from './pages/crud-client/crud-client.component';
import { ClientCrudTableComponent } from './components/client-crud-table/client-crud-table.component';
import { ResponsableBeneficeComponent } from './pages/responsable-benefice/responsable-benefice.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    LoginComponent,
    SignUpComponent,
    ListRestaurantComponent,
    ListeCommandeComponent,
    NavbarComponent,
    FooterComponent,
    TableComponent,
    DragAndDropComponent,
    LoaderComponent,
    LineChartComponent,
    BarChartComponent,
    CodeRecuperationComponent,
    ResetPasswordComponent,
    RestaurantCardComponent,
    HeaderComponent,
    ListPlatComponent,
    DishCardComponent,
    AddToCardModalComponent,
    UpAndDownNumberComponent,
    OrderDetailComponent,
    OrderTableComponent,
    OrderScheduleTableComponent,
    OrderStoryComponent,
    SwitchToogleComponent,
    RestaurantDishesComponent,
    DishesCrudTableComponent,
    DishModalAddComponent,
    DishModalEditComponent,
    RestaurantBenenficeComponent,
    OrderAssignComponent,
    OrderCardComponent,
    CrudRestaurantComponent,
    RestaurantCrudTableComponent,
    RestaurantModalEditComponent,
    RestaurantModalAddComponent,
    CrudClientComponent,
    ClientCrudTableComponent,
    ResponsableBeneficeComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
