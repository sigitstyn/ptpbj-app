import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uraian2Component } from './uraian2.component';

describe('Uraian2Component', () => {
  let component: Uraian2Component;
  let fixture: ComponentFixture<Uraian2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uraian2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uraian2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
