import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkProdutosComponent } from './link-produtos.component';

describe('LinkProdutosComponent', () => {
  let component: LinkProdutosComponent;
  let fixture: ComponentFixture<LinkProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkProdutosComponent]
    });
    fixture = TestBed.createComponent(LinkProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
