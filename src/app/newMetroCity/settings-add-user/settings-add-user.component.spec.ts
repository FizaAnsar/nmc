import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAddUserComponent } from './settings-add-user.component';

describe('SettingsAddUserComponent', () => {
  let component: SettingsAddUserComponent;
  let fixture: ComponentFixture<SettingsAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsAddUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
