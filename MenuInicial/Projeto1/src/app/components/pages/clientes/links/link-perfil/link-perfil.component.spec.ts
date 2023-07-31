import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPerfilComponent } from './link-perfil.component';

describe('LinkPerfilComponent', () => {
  let component: LinkPerfilComponent;
  let fixture: ComponentFixture<LinkPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkPerfilComponent]
    });
    fixture = TestBed.createComponent(LinkPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
