import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterLink, RouterModule, Routes } from "@angular/router";
import { AddCountryComponent } from "./add-country/add-country.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryComponent } from "./country.component";

const countryRoute : Routes=[
    {path : "country" ,component:CountryComponent , 
children:[
    {path:"add-country", component:AddCountryComponent },
    {path :"list-counrty", component:CountryListComponent}
]}
];

@NgModule({
    imports:[ ReactiveFormsModule , RouterModule.forRoot(countryRoute)],
    exports:[RouterModule]
})

export class CountryRoutingModule{

}