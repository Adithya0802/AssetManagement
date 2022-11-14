import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALicenseComponent } from './a-license.component';

describe('ALicenseComponent', () => {
  let component: ALicenseComponent;
  let fixture: ComponentFixture<ALicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
