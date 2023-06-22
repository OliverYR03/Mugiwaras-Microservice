import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPersonalComponent } from './actualizar-personal.component';

describe('ActualizarPersonalComponent', () => {
  let component: ActualizarPersonalComponent;
  let fixture: ComponentFixture<ActualizarPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarPersonalComponent]
    });
    fixture = TestBed.createComponent(ActualizarPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
