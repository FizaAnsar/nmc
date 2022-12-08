import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelSystemComponent } from './fuel-system.component';

describe('FuelSystemComponent', () => {
  let component: FuelSystemComponent;
  let fixture: ComponentFixture<FuelSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
