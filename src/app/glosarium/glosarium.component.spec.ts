import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlosariumComponent } from './glosarium.component';

describe('GlosariumComponent', () => {
  let component: GlosariumComponent;
  let fixture: ComponentFixture<GlosariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlosariumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlosariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
