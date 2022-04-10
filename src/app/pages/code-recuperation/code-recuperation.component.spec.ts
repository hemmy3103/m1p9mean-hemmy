import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeRecuperationComponent } from './code-recuperation.component';

describe('CodeRecuperationComponent', () => {
  let component: CodeRecuperationComponent;
  let fixture: ComponentFixture<CodeRecuperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeRecuperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeRecuperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
