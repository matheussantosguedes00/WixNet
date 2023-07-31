import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkGeralComponent } from './link-geral.component';

describe('LinkGeralComponent', () => {
  let component: LinkGeralComponent;
  let fixture: ComponentFixture<LinkGeralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkGeralComponent]
    });
    fixture = TestBed.createComponent(LinkGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
