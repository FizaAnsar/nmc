import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandStatusComponent } from './demand-status.component';

describe('DemandStatusComponent', () => {
  let component: DemandStatusComponent;
  let fixture: ComponentFixture<DemandStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
