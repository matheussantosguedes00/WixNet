import { TestBed } from '@angular/core/testing';

import { ProdutosService } from '../link-produtos/produto.service.service';

describe('ProdutoServiceService', () => {
  let service: ProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
