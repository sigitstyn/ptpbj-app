import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gladhen2Component } from './gladhen2.component';

describe('Gladhen2Component', () => {
  let component: Gladhen2Component;
  let fixture: ComponentFixture<Gladhen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gladhen2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gladhen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
