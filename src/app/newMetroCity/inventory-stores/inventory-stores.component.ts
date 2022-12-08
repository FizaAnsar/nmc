import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/auth/validator/validateform';
import { Stores } from 'src/app/Model/data-type';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inventory-stores',
  templateUrl: './inventory-stores.component.html',
  styleUrls: ['./inventory-stores.component.css']
})
export class InventoryStoresComponent implements OnInit {

  activeIndex = -1;


  storeModel = new Stores();
  allStores: any;
  addStorefg!:FormGroup
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.addStorefg = new FormGroup({
      storeName: new FormControl("", Validators.required),
      inchargeName: new FormControl("", Validators.required),
      contactNumber: new FormControl("", Validators.required),
      stockCapacity: new FormControl("", Validators.required),
      storeAddress: new FormControl("", Validators.required),
    })

    this.Stores();
  }

  
  onSubmit(){
      console.log(this.storeModel)
    if(this.activeIndex == -1){
      if(this.addStorefg.valid){
         this.api.addStores(this.storeModel).subscribe({
          next:(res)=>{
            console.log("Success!",res)
            alert("Successfully Added!");
            this.Stores();
          },
          error:(err)=>{
            console.log("Error!",err)
          }
        })
      }
      else{
        validateForm.validateAllFormFields(this.addStorefg);
      }
    }
    else {
      this.api.updateStores(this.storeModel).subscribe(data =>{
        this.Stores();
      })
    }

    this.storeModel = new Stores();
    this.activeIndex = -1;
}


Stores() {
 
  this.api.getStores().subscribe({
    next: (res) => {
      this.allStores = res;
    },
  });
}

editItem(obj, index){
  console.log(obj, "obj");
    console.log(index, "index")
    this.storeModel.id = obj.id;
    this.storeModel.storeName = obj.storeName;
    this.storeModel.inchargeName = obj.inchargeName;
    this.storeModel.contactNumber = obj.contactNumber;
    this.storeModel.stockCapacity = obj.stockCapacity;
    this.storeModel.storeAddress = obj.storeAddress;
    
    this.activeIndex = index;
}


removeItem(i:any){
  console.log(i);
    this.api.deleteStores(i).subscribe((data) => {
      this.Stores();
    });
}
}
