import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeliveredTableComponent } from './order-delivered-table.component';

describe('OrderDeliveredTableComponent', () => {
  let component: OrderDeliveredTableComponent;
  let fixture: ComponentFixture<OrderDeliveredTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDeliveredTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeliveredTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
