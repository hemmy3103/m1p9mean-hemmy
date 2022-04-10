import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchToogleComponent } from './switch-toogle.component';

describe('SwitchToogleComponent', () => {
  let component: SwitchToogleComponent;
  let fixture: ComponentFixture<SwitchToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchToogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
