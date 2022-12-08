import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStoreTransferComponent } from './inventory-store-transfer.component';

describe('InventoryStoreTransferComponent', () => {
  let component: InventoryStoreTransferComponent;
  let fixture: ComponentFixture<InventoryStoreTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryStoreTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryStoreTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
