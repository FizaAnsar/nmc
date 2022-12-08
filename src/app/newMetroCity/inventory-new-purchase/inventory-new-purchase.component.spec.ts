import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryNewPurchaseComponent } from './inventory-new-purchase.component';

describe('InventoryNewPurchaseComponent', () => {
  let component: InventoryNewPurchaseComponent;
  let fixture: ComponentFixture<InventoryNewPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryNewPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryNewPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
