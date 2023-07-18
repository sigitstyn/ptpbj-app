import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uraian1Component } from './uraian1.component';

describe('Uraian1Component', () => {
  let component: Uraian1Component;
  let fixture: ComponentFixture<Uraian1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uraian1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uraian1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
