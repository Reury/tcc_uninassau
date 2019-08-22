/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProcessoService } from './processo.service';

describe('Service: Processo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessoService]
    });
  });

  it('should ...', inject([ProcessoService], (service: ProcessoService) => {
    expect(service).toBeTruthy();
  }));
});
