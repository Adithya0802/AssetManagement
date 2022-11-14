import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APspComponent } from './a-psp.component';

describe('APspComponent', () => {
  let component: APspComponent;
  let fixture: ComponentFixture<APspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
