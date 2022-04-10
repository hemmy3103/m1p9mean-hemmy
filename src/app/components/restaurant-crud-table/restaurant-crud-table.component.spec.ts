import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCrudTableComponent } from './restaurant-crud-table.component';

describe('RestaurantCrudTableComponent', () => {
  let component: RestaurantCrudTableComponent;
  let fixture: ComponentFixture<RestaurantCrudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantCrudTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
