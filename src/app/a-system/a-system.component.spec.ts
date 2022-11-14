import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASystemComponent } from './a-system.component';

describe('ASystemComponent', () => {
  let component: ASystemComponent;
  let fixture: ComponentFixture<ASystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
