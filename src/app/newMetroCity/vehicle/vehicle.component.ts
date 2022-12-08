import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import validateForm from 'src/app/auth/validator/validateform';
import { Department, Vehicles } from 'src/app/Model/data-type';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  
  activeIndex = -1;
  
  // Vehicle
  vehicleModel = new Vehicles();
  AllDepartments: any;
  AllVehicles: any;
  postVehicles: any;
  vehicleNumber: any;
  addVehicle!: FormGroup;
  vehicleNoRegex =
    '^[A-a][Z-z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$';
  vehicleNumberReg = '^[A-Z]{2,3}[ -][0-9]{3,4}$';

  // Departmernt
  departmentModel = new Department();
  addDepartment!: FormGroup;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.addVehicle = new FormGroup({
      vehicleNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(this.vehicleNumberReg),
      ]),
      vehicleMake: new FormControl('', Validators.required),
      vehicleModel: new FormControl('', Validators.required),
      allowedFuel: new FormControl('', Validators.required),
      fuelType: new FormControl('', Validators.required),
      driverId: new FormControl('', Validators.required),
      departmentId: new FormControl('', Validators.required),
    });

    this.addDepartment = new FormGroup({
      departmentName: new FormControl('', Validators.required),
    });
    this.Departments();
    this.Vehicles();
  }

  ////////////////////////////// Adding Department to DB //////////////////////////////////////
  onSubmitDepartment() {

      if (this.addDepartment.valid) {
        console.log(this.departmentModel);
  
        this.api.addDepartment(this.departmentModel).subscribe({
          next: (res) => {
            console.log('Success!', res);
            alert('Successfully Added!');
            this.Departments();
          },
          error: (err) => {
            console.log('Error!', err);
          },
        });
      } else {
        validateForm.validateAllFormFields(this.addDepartment);
      }
   
  }

  ////////////////////////////// Getting Department from DB //////////////////////////////////////
  Departments() {
    // department get
    this.api.getDepartment().subscribe({
      next: (res) => {
        this.AllDepartments = res;
      },
    });
  }

  ////////////////////////////// Adding Vehicle to DB //////////////////////////////////////
 
  onSubmitVehicle() {

    if(this.activeIndex == 1){
      if (this.addVehicle.valid) {
        console.log(this.vehicleModel);
  
        this.api.addVehicle(this.vehicleModel).subscribe({
          next: (res) => {
            console.log('Success!', res);
            this.Vehicles();
            const btnAdd = document.getElementById('addBtn');
            console.log(btnAdd);
            // this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
            // btnAdd.onclick('click.dismiss.bs.modal')
          },
          error: (err) => {
            console.log('Error!', err);
          },
        });
      } else {
        validateForm.validateAllFormFields(this.addVehicle);
      }
    }
    else {
      this.api.updateVehicle(this.vehicleModel).subscribe(data => {
        this.Vehicles();
      })
        // this.AllVehicles.splice(this.activeIndex, 1, this.vehicleModel)
    }
    this.vehicleModel = new Vehicles();
    this.activeIndex = -1;
  }

  ////////////////////////////// Getting Vehicle from DB //////////////////////////////////////
  Vehicles() {
    // vehicle get request
    this.api.getVehicle().subscribe({
      next: (res) => {
        this.AllVehicles = res;
      },
    });
    // vehicle post request
  }

  ////////////////////////////// Updating Vehicle in DB //////////////////////////////////////
  editItem(obj,index){
    
    console.log(obj, "obj");
    console.log(index, "index")
    this.vehicleModel.vehicleNumber = obj.vehicleNumber;
    this.vehicleModel.vehicleMake = obj.vehicleMake;
    this.vehicleModel.vehicleModel = obj.vehicleModel;
    this.vehicleModel.allowedFuel = obj.allowedFuel;
    this.vehicleModel.fuelType = obj.fuelType;
    this.vehicleModel.driverId = obj.driverId;
    this.vehicleModel.departmentId = obj.departmentId;
    this.vehicleModel.id = obj.id;


    this.activeIndex = index;
  }

  ////////////////////////////// Deleting Vehicle from DB //////////////////////////////////////
  removeItem(i: any) {
    console.log(i);
    this.api.deleteVehicle(i).subscribe((data) => {
      this.Vehicles();
    });
  }
}
