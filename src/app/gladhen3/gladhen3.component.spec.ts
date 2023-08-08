import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gladhen3Component } from './gladhen3.component';

describe('Gladhen3Component', () => {
  let component: Gladhen3Component;
  let fixture: ComponentFixture<Gladhen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gladhen3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gladhen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
