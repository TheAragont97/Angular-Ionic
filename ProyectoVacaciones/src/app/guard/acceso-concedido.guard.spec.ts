import { TestBed } from '@angular/core/testing';

import { AccesoConcedidoGuard } from './acceso-concedido.guard';

describe('AccesoConcedidoGuard', () => {
  let guard: AccesoConcedidoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccesoConcedidoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
