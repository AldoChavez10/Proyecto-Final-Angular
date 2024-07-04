import { TestBed } from '@angular/core/testing';

import { ServiceListarInscripcionesService } from './service-listar-inscripciones.service';

describe('ServiceListarInscripcionesService', () => {
  let service: ServiceListarInscripcionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListarInscripcionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
