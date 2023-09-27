import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraGradosComponent } from './calculadora-grados.component';

describe('CalculadoraGradosComponent', () => {
  let component: CalculadoraGradosComponent;
  let fixture: ComponentFixture<CalculadoraGradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraGradosComponent]
    });
    fixture = TestBed.createComponent(CalculadoraGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
