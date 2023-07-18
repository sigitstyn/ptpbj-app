import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gladhen1Component } from './gladhen1.component';

describe('Gladhen1Component', () => {
  let component: Gladhen1Component;
  let fixture: ComponentFixture<Gladhen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gladhen1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gladhen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
