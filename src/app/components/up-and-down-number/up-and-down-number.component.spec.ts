import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpAndDownNumberComponent } from './up-and-down-number.component';

describe('UpAndDownNumberComponent', () => {
  let component: UpAndDownNumberComponent;
  let fixture: ComponentFixture<UpAndDownNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpAndDownNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpAndDownNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
