import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsInvoicePrintingComponent } from './settings-invoice-printing.component';

describe('SettingsInvoicePrintingComponent', () => {
  let component: SettingsInvoicePrintingComponent;
  let fixture: ComponentFixture<SettingsInvoicePrintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsInvoicePrintingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsInvoicePrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
