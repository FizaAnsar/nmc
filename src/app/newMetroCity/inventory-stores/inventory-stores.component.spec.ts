import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStoresComponent } from './inventory-stores.component';

describe('InventoryStoresComponent', () => {
  let component: InventoryStoresComponent;
  let fixture: ComponentFixture<InventoryStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryStoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
