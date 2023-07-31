import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkLabsComponent } from './link-labs.component';

describe('LinkLabsComponent', () => {
  let component: LinkLabsComponent;
  let fixture: ComponentFixture<LinkLabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkLabsComponent]
    });
    fixture = TestBed.createComponent(LinkLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
