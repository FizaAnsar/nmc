import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/auth/validator/validateform';
import { Purchase } from 'src/app/Model/data-type';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inventory-new-purchase',
  templateUrl: './inventory-new-purchase.component.html',
  styleUrls: ['./inventory-new-purchase.component.css']
})
export class InventoryNewPurchaseComponent implements OnInit {

  activeIndex = -1;

  purchaseModel = new Purchase();
  allPurchase: any;
  addPurchase!:FormGroup;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.addPurchase = new FormGroup({
      fuelType: new FormControl("", Validators.required),
      fuelQuantity: new FormControl("", Validators.required),
      totalPrice: new FormControl("", Validators.required),
      storage: new FormControl("", Validators.required),
      recievingDate: new FormControl("", Validators.required),
      invoiceNumber: new FormControl("", Validators.required),
      supplierName: new FormControl("", Validators.required),
      paymentMode: new FormControl("", Validators.required),
      amountPaid: new FormControl("", Validators.required),
    })

    this.Purchases();
  }


  onSubmitPurchase(){
    console.log(this.purchaseModel)
    if(this.activeIndex == -1){
      if(this.addPurchase.valid){
         this.api.addPurchase(this.purchaseModel).subscribe({
          next:(res)=>{
            console.log("Success!",res)
            alert("Successfully Added!");
            this.Purchases();
          },
          error:(err)=>{
            console.log("Error!",err)
          }
        })
      }
      else{
        validateForm.validateAllFormFields(this.addPurchase);
      }
    }
    else {
      this.api.updateUser(this.purchaseModel).subscribe(data =>{
        this.Purchases();
      })
    }
  
    this.purchaseModel = new Purchase();
    this.activeIndex = -1;
  }

  Purchases() {
    // department get
    this.api.getPurchase().subscribe({
      next: (res) => {
        this.allPurchase = res;
      },
    });
  }

  editItem(obj, index){
    console.log(obj, "obj");
      console.log(index, "index")
      this.purchaseModel.id = obj.id;
      this.purchaseModel.fuelType = obj.fuelType;
      this.purchaseModel.fuelQuantity = obj.fuelQuantity;
      this.purchaseModel.totalPrice = obj.totalPrice;
      this.purchaseModel.storage = obj.storage;
      this.purchaseModel.recievingDate = obj.recievingDate;
      this.purchaseModel.invoiceNumber = obj.invoiceNumber;
      this.purchaseModel.supplierName = obj.supplierName;
      this.purchaseModel.paymentMode = obj.paymentMode;
      this.purchaseModel.amountPaid = obj.amountPaid;
      
      this.activeIndex = index;
  }
  
  removeItem(i:any){
    console.log(i);
    this.api.deletePurchase(i).subscribe((data) => {
      this.Purchases();
    });
  }
}
