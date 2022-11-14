import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOspaceComponent } from './a-ospace.component';

describe('AOspaceComponent', () => {
  let component: AOspaceComponent;
  let fixture: ComponentFixture<AOspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AOspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AOspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
