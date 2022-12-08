import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUserSettingComponent } from './settings-user-setting.component';

describe('SettingsUserSettingComponent', () => {
  let component: SettingsUserSettingComponent;
  let fixture: ComponentFixture<SettingsUserSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsUserSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsUserSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
