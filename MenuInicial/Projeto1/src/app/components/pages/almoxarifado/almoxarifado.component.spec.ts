import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmoxarifadoComponent } from './almoxarifado.component';

describe('AlmoxarifadoComponent', () => {
  let component: AlmoxarifadoComponent;
  let fixture: ComponentFixture<AlmoxarifadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmoxarifadoComponent]
    });
    fixture = TestBed.createComponent(AlmoxarifadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
