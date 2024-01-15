import { TestBed } from '@angular/core/testing';

import { ItensDisponiveisService } from './itens-disponiveis.service';

describe('ItensDisponiveisService', () => {
  let service: ItensDisponiveisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItensDisponiveisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
