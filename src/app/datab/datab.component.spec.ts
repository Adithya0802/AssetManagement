import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabComponent } from './datab.component';

describe('DatabComponent', () => {
  let component: DatabComponent;
  let fixture: ComponentFixture<DatabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
