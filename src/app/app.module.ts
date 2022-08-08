import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryComponent } from './country/country.component';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { CountryRoutingModule } from './country/country.module';


const appRotes :  Routes = [
  {path : 'country',component : CountryComponent},
  // {path : 'add-book',component : AddBookComponent},
  // {path : 'manage-book',component : ManageBookComponent},
  // {path : 'view-detail',component : VeiwDetailComponent},
  {path : '' , redirectTo :'/home',pathMatch :'full'},
  {path : '**', component : CountryComponent}
];

@NgModule({
  declarations: [
  AppComponent,
    CountryComponent,
       PersonComponent,
       AddressComponent,
       AddCountryComponent,
       CountryListComponent,
       PersonListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CountryRoutingModule,
    RouterModule.forRoot(appRotes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
