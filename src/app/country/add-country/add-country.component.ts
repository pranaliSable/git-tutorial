import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  
  constructor() { }

  countryForm = new FormGroup({
		name: new FormControl(),
		capital: new FormControl(),
		currency: new FormControl()
	});

  ngOnInit(): void {
  }

  onFormSubmit(){
    
  }


}
