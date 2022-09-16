import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnassetComponent } from './returnasset.component';

describe('ReturnassetComponent', () => {
  let component: ReturnassetComponent;
  let fixture: ComponentFixture<ReturnassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnassetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
