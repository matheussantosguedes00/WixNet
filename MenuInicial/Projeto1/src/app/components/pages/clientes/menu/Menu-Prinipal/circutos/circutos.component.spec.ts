import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircutosComponent } from './circutos.component';

describe('CircutosComponent', () => {
  let component: CircutosComponent;
  let fixture: ComponentFixture<CircutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircutosComponent]
    });
    fixture = TestBed.createComponent(CircutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
