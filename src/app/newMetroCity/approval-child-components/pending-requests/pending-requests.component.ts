import { Component, OnInit } from '@angular/core';
import {NgConfirmService} from 'ng-confirm-box'

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {
  pendingRequests:any=[];
  status=[];
  constructor(private confirmService:NgConfirmService) { }

  ngOnInit(): void {
    this.pendingRequests= JSON.parse(localStorage.getItem('pendingRequests'))
   console.log("GET Item of Approval",this.pendingRequests)
  }
  demandValue="50L"


  approve(r,val,index){
    console.log("Request Approved",r)
    console.log(val)
    let approved
    if(val=="approve" ){
      approved=r.demand
    this.confirmService.showConfirm(`Are You Sure you want to ${val}?`,
    ()=>{
      this.status.push({
        vehicleNumber:r.vehicleNumber,
        driverId:r.driverId,
        departmentId:r.departmentId, 
        demand:r.demand,
        status:val,
        approved:approved
      })
      console.log("Approval",this.status)
      this.pendingRequests.splice(index,1)
      localStorage.setItem("pendingRequests",JSON.stringify(this.pendingRequests))
      localStorage.setItem("statusUpdate",JSON.stringify(this.status))
      
    },
    ()=>{

    }
    )

    }
    else if( val=="deny"){
      approved=r.demand
      this.confirmService.showConfirm(`Are You Sure you want to ${val}?`,
      ()=>{
        this.status.push({
          vehicleNumber:r.vehicleNumber,
          driverId:r.driverId,
          departmentId:r.departmentId, 
          demand:r.demand,
          status:val,
          approved:approved
        })
        console.log("Approval",this.status)
        this.pendingRequests.splice(index,1)
        localStorage.setItem("pendingRequests",JSON.stringify(this.pendingRequests))
        localStorage.setItem("statusUpdate",JSON.stringify(this.status))
      },
      ()=>{
  
      }
      )
    }
    else if(val=="change"){

    }
    localStorage.setItem("pendingRequests",JSON.stringify(this.pendingRequests))

   
    // this.status.push({
    //   vehicleNumber:r.vehicleNumber,
    //   driverId:r.driverId,
    //   departmentId:r.departmentId, 
    //   demand:r.demand,
    //   status:val,
    //   approved:approved
    // })
   
  }

}
