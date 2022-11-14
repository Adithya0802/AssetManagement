import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADongleComponent } from './a-dongle.component';

describe('ADongleComponent', () => {
  let component: ADongleComponent;
  let fixture: ComponentFixture<ADongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADongleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
