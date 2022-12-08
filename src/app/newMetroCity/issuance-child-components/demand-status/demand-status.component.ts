import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-demand-status',
  templateUrl: './demand-status.component.html',
  styleUrls: ['./demand-status.component.css']
})
export class DemandStatusComponent implements OnInit {
  demandStatus:any=[];
  statusChnage:any=[]
  constructor(private api:ApiService) {
    // console.log("constructor",this.demandStatus)
    // this.api.receiveRequests().subscribe({
    //   next:(res)=>{
    //     // this.demandStatus=res;
    //     console.log("demand status......",res)
    //   }
    // })
   }


  ngOnInit(): void {
   this.demandStatus= JSON.parse(localStorage.getItem('demandStatus'))
   console.log("Hello GET Item",this.demandStatus)
   this.statusChnage=JSON.parse(localStorage.getItem('statusUpdate'))
   for(let i in this.demandStatus){
    if(this.demandStatus[i].vehicleNumber==this.statusChnage[i].vehicleNumber){
      this.demandStatus[i].status=this.statusChnage[i].status;
   
      this.demandStatus[i].approved=this.statusChnage[i].approved;
    }
   }
   console.log("After Approval Requests",this.demandStatus)
   
  }
  demandValue="50L"
}
