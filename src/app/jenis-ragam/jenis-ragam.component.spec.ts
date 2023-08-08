import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisRagamComponent } from './jenis-ragam.component';

describe('JenisRagamComponent', () => {
  let component: JenisRagamComponent;
  let fixture: ComponentFixture<JenisRagamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JenisRagamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JenisRagamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
