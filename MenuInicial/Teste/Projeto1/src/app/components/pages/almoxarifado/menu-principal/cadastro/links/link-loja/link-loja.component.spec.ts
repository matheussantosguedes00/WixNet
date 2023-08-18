import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkLojaComponent } from './link-loja.component';

describe('LinkLojaComponent', () => {
  let component: LinkLojaComponent;
  let fixture: ComponentFixture<LinkLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkLojaComponent]
    });
    fixture = TestBed.createComponent(LinkLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
