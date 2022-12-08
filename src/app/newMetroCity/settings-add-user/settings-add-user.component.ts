import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/auth/validator/validateform';
import { User } from 'src/app/Model/data-type';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-settings-add-user',
  templateUrl: './settings-add-user.component.html',
  styleUrls: ['./settings-add-user.component.css']
})
export class SettingsAddUserComponent implements OnInit {

  activeIndex = -1;

  userModel = new User();
  allUsers: any;
  addUser!:FormGroup;
  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.addUser = new FormGroup({
      userName: new FormControl("", Validators.required),
      userRole: new FormControl("", Validators.required),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      userPassword: new FormControl("", Validators.required),
    })

    this.Users();
  }

  onSubmitUser(){
    console.log(this.userModel)
  if(this.activeIndex == -1){
    if(this.addUser.valid){
       this.api.addUser(this.userModel).subscribe({
        next:(res)=>{
          console.log("Success!",res)
          alert("Successfully Added!");
          this.Users();
        },
        error:(err)=>{
          console.log("Error!",err)
        }
      })
    }
    else{
      validateForm.validateAllFormFields(this.addUser);
    }
  }
  else {
    this.api.updateUser(this.userModel).subscribe(data =>{
      this.Users();
    })
  }

  this.userModel = new User();
  this.activeIndex = -1;
}


  Users() {
    // department get
    this.api.getUser().subscribe({
      next: (res) => {
        this.allUsers = res;
      },
    });
  }

  editItem(obj, index){
    console.log(obj, "obj");
      console.log(index, "index")
      this.userModel.id = obj.id;
      this.userModel.userName = obj.userName;
      this.userModel.userRole = obj.userRole;
      this.userModel.firstName = obj.firstName;
      this.userModel.lastName = obj.lastName;
      this.userModel.userPassword = obj.userPassword;
      
      this.activeIndex = index;
  }
  
  removeItem(i:any){
    console.log(i);
    this.api.deleteUser(i).subscribe((data) => {
      this.Users();
    });
  }
  
  logout(){
    this.api.removeTokenOnLogout();
  }
}
