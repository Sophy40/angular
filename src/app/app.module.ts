
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { BsDropdownModule, BsDropdownMenuDirective } from 'ngx-bootstrap/dropdown';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { InventoryComponentComponent } from './inventory-component/inventory-component.component';
import { ScalculatorComponent } from './s-calculator/s-calculator.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {ProductService} from './product.service';
import { LoginComponent } from './login/login.component' ;
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductEntryComponent,
    ScalculatorComponent,
    InventoryComponentComponent,
    CalculatorComponent,
    LoginComponent,
    ProductdisplayComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    CollapseModule.forRoot(),FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }