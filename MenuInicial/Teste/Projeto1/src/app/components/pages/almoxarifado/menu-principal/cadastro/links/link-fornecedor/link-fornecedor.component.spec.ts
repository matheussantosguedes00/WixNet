import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFornecedorComponent } from './link-fornecedor.component';

describe('LinkFornecedorComponent', () => {
  let component: LinkFornecedorComponent;
  let fixture: ComponentFixture<LinkFornecedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkFornecedorComponent]
    });
    fixture = TestBed.createComponent(LinkFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
