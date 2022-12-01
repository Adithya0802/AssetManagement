import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyMouseComponent } from './key-mouse.component';

describe('KeyMouseComponent', () => {
  let component: KeyMouseComponent;
  let fixture: ComponentFixture<KeyMouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyMouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
