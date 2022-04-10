import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStoryComponent } from './order-story.component';

describe('OrderStoryComponent', () => {
  let component: OrderStoryComponent;
  let fixture: ComponentFixture<OrderStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
