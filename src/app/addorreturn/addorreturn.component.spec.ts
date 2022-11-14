import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorreturnComponent } from './addorreturn.component';

describe('AddorreturnComponent', () => {
  let component: AddorreturnComponent;
  let fixture: ComponentFixture<AddorreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
