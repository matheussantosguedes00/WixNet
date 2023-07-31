import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCaixaComponent } from './link-caixa.component';

describe('LinkCaixaComponent', () => {
  let component: LinkCaixaComponent;
  let fixture: ComponentFixture<LinkCaixaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkCaixaComponent]
    });
    fixture = TestBed.createComponent(LinkCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
