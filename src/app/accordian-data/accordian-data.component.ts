import { Component } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-accordian-data',
  templateUrl: './accordian-data.component.html',
  styleUrls: ['./accordian-data.component.css']
})
export class AccordianDataComponent {

  accordianData : any[] = []
  
  constructor( private dataServe : DataHandlerService){
    this.accordianData = this.dataServe.headerInfo;
    // console.log(this.accordianData);
  }


}
