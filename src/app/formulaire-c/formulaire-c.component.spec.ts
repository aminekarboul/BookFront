import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCComponent } from './formulaire-c.component';

describe('FormulaireCComponent', () => {
  let component: FormulaireCComponent;
  let fixture: ComponentFixture<FormulaireCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
