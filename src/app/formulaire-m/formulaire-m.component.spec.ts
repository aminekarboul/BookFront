import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMComponent } from './formulaire-m.component';

describe('FormulaireMComponent', () => {
  let component: FormulaireMComponent;
  let fixture: ComponentFixture<FormulaireMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
