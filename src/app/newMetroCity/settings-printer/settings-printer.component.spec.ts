import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPrinterComponent } from './settings-printer.component';

describe('SettingsPrinterComponent', () => {
  let component: SettingsPrinterComponent;
  let fixture: ComponentFixture<SettingsPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPrinterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
