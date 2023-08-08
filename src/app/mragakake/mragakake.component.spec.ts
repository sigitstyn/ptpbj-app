import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MragakakeComponent } from './mragakake.component';

describe('MragakakeComponent', () => {
  let component: MragakakeComponent;
  let fixture: ComponentFixture<MragakakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MragakakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MragakakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
