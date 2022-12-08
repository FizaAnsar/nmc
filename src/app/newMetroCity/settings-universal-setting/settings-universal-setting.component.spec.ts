import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUniversalSettingComponent } from './settings-universal-setting.component';

describe('SettingsUniversalSettingComponent', () => {
  let component: SettingsUniversalSettingComponent;
  let fixture: ComponentFixture<SettingsUniversalSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsUniversalSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsUniversalSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
