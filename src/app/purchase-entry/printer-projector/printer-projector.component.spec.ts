import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterProjectorComponent } from './printer-projector.component';

describe('PrinterProjectorComponent', () => {
  let component: PrinterProjectorComponent;
  let fixture: ComponentFixture<PrinterProjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterProjectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterProjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
