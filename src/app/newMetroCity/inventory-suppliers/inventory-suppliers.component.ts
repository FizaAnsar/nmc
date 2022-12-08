import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/auth/validator/validateform';
import { Supplier } from 'src/app/Model/data-type';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inventory-suppliers',
  templateUrl: './inventory-suppliers.component.html',
  styleUrls: ['./inventory-suppliers.component.css']
})
export class InventorySuppliersComponent implements OnInit {

  activeIndex = -1;

  supplierModel = new Supplier();
  AllSuppliers: any;

  addSupplier! : FormGroup;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.addSupplier = new FormGroup({
      suplierName: new FormControl('', Validators.required),
      suplierAddress: new FormControl('', Validators.required),
      suplierContact: new FormControl('', Validators.required),
    });

    this.Suppliers();
  }

  ////////////////////////////// Adding Supplier to DB //////////////////////////////////////
 
  onSubmitSupplier() {
    
    if(this.activeIndex == -1){
      if (this.addSupplier.valid) {
        console.log(this.supplierModel);
  
        this.api.addSupplier(this.supplierModel).subscribe({
          next: (res) => {
            console.log('Success!', res);
            alert("Successfully Added!");
            this.Suppliers();
          },
          error: (err) => {
            console.log('Error!', err);
          },
        });
      } else {
        validateForm.validateAllFormFields(this.addSupplier);
      } 
    }
    else {
      this.api.updateSupplier(this.supplierModel).subscribe(data => {
        this.Suppliers();
      })
    }
    this.supplierModel = new Supplier();
    this.activeIndex = -1;
  }


////////////////////////////// Getting Supplier from DB //////////////////////////////////////
  Suppliers() {
    // department get
    this.api.getSupplier().subscribe({
      next: (res) => {
        
        this.AllSuppliers = res;
      },
    });
  }

  editItem(obj, index){
    console.log(obj, "obj");
    console.log(index, "index")
    this.supplierModel.id = obj.id;
    this.supplierModel.suplierName = obj.suplierName;
    this.supplierModel.suplierAddress = obj.suplierAddress;
    this.supplierModel.suplierContact = obj.suplierContact;
  


    this.activeIndex = index;
  }

  removeItem(i:any){
    console.log(i, "lets see");
    this.api.deleteSupplier(i).subscribe((data) =>{
      
          this.Suppliers();
      
    })
    
  }

}
