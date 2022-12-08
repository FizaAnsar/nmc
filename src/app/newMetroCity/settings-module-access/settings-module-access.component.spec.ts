import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsModuleAccessComponent } from './settings-module-access.component';

describe('SettingsModuleAccessComponent', () => {
  let component: SettingsModuleAccessComponent;
  let fixture: ComponentFixture<SettingsModuleAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsModuleAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsModuleAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
