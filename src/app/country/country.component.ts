import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template:`<h2>Welcome to Country Home</h2>
  <nav [ngClass] = "'child-menu'">
     <ul>
 <li><a [routerLink]="['add-country']" routerLinkActive="active">Add Country</a></li>
 <li><a [routerLink]="['list-counrty']" routerLinkActive="active">Country List</a></li>
     </ul>  
  </nav>  
  <div [ngClass] = "'child-container'">	
   <router-outlet></router-outlet>	
  </div>
`,
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
