import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  formData : any;

  constructor(private dataServe : DataHandlerService){}

  ngOnInit(): void {
    this.formData = new FormGroup({
      header : new FormControl('', Validators.required),
      section : new FormControl('', Validators.required),
    })
  }

  onSubmit(){
    // console.log(this.formData.value);
    this.dataServe.getDataFunc(this.formData.value)
    
    
    this.formData.reset();
  }
  

}

