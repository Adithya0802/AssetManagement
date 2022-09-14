import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetloginComponent } from './assetlogin.component';

describe('AssetloginComponent', () => {
  let component: AssetloginComponent;
  let fixture: ComponentFixture<AssetloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
