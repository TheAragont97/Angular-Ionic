import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionadorComponent } from './seleccionador.component';

describe('SeleccionadorComponent', () => {
  let component: SeleccionadorComponent;
  let fixture: ComponentFixture<SeleccionadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
