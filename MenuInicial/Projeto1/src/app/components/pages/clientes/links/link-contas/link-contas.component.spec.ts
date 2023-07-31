import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkContasComponent } from './link-contas.component';

describe('LinkContasComponent', () => {
  let component: LinkContasComponent;
  let fixture: ComponentFixture<LinkContasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkContasComponent]
    });
    fixture = TestBed.createComponent(LinkContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
