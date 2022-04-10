import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableBeneficeComponent } from './responsable-benefice.component';

describe('ResponsableBeneficeComponent', () => {
  let component: ResponsableBeneficeComponent;
  let fixture: ComponentFixture<ResponsableBeneficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsableBeneficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableBeneficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
