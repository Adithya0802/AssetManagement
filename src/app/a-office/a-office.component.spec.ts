import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOfficeComponent } from './a-office.component';

describe('AOfficeComponent', () => {
  let component: AOfficeComponent;
  let fixture: ComponentFixture<AOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
