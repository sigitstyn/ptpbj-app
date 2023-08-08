import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraNulisComponent } from './cara-nulis.component';

describe('CaraNulisComponent', () => {
  let component: CaraNulisComponent;
  let fixture: ComponentFixture<CaraNulisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaraNulisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaraNulisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
