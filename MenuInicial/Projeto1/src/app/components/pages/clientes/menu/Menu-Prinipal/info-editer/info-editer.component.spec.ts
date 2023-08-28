import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEditerComponent } from './info-editer.component';

describe('InfoEditerComponent', () => {
  let component: InfoEditerComponent;
  let fixture: ComponentFixture<InfoEditerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoEditerComponent]
    });
    fixture = TestBed.createComponent(InfoEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
