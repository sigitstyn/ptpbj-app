import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengertianWebComponent } from './pengertian-web.component';

describe('PengertianWebComponent', () => {
  let component: PengertianWebComponent;
  let fixture: ComponentFixture<PengertianWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengertianWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengertianWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
