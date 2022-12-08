import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
// import { NgxPrintElementService } from 'ngx-print-element';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-reports-details',
  templateUrl: './reports-details.component.html',
  styleUrls: ['./reports-details.component.css']
})
export class ReportsDetailsComponent implements OnInit {

  constructor() { }
  // public print:NgxPrintElementService

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
  fileName= 'dailyReports.xlsx';
  



  generatePdfFile(){
    
    let data = document.getElementById('dailyReports')
    this.generatePdf(data)
   
  }
  generatePdf(htmlContent){
    html2canvas(htmlContent).then(canvas=>{
      let imgWidth =290;
      let imgHeight = (canvas.height * imgWidth/canvas.width)
      const contentDataUrl = canvas.toDataURL('image/png')
      let pdf = new jsPDF('l','mm','a4')
      var position = 10;
      pdf.addImage(contentDataUrl,'PNG',0,position,imgWidth,imgHeight);
      pdf.save('daily-sales-report.pdf')

    })

  }

  // public exportTableToExcel(): void{
  //   const downloadLink = document.createElement('a');
  //   const dataType= 'application/vnd.ms-excel';
  //   const table = document.getElementById('dailyReports');
  //   const tableHtml = table.outerHTML.replace(/ /g,  '%20');
  //   document.body.appendChild(downloadLink);
  //   downloadLink.href = 'data:' + dataType + ' ' + tableHtml;
  //   downloadLink.download = 'dailySalesReports.xls';
  //   downloadLink.click();
  // }
  
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('dailyReports');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
  
  // public config = {
  //   printMode: 'template-popup', // template
  //   popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
  //   pageTitle: 'Daily Sales Report',
  //   templateString: '<header>New Metro City</header>{{printBody}}<footer>NMC</footer>',
  //   stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
  //   styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; color: black }', 'header, table, footer { margin: auto; text-align: center; }']
  // }


}
