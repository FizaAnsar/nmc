import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDemandComponent } from './send-demand.component';

describe('SendDemandComponent', () => {
  let component: SendDemandComponent;
  let fixture: ComponentFixture<SendDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendDemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
