import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-inventory-history',
  templateUrl: './inventory-history.component.html',
  styleUrls: ['./inventory-history.component.css']
})
export class InventoryHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fromdisplayMonths = 1;
	fromnavigation = 'select';
	fromshowWeekNumbers = false;
	fromoutsideDays = 'visible';

  todisplayMonths = 1;
	tonavigation = 'select';
	toshowWeekNumbers = false;
	tooutsideDays = 'visible';

  @ViewChild('report',{static:false}) el!: ElementRef

  // generatePdfFile(){
  //   let pdf = new jsPDF()
  //   pdf.html(this.el.nativeElement,{
  //     callback:(pdf)=>{
  //       pdf.save("Daily-reports.pdf")
  //     }
  //   })
  // }

}
