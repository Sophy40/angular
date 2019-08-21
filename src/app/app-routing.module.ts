
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { InventoryComponentComponent } from './inventory-component/inventory-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {'path':'product-entry', 'component': ProductEntryComponent},
  {'path':'','component': ProductdisplayComponent},
  {'path':'product-display','component': ProductdisplayComponent},
  {'path':'inventory','component': InventoryComponentComponent},
  {path:'login',component: LoginComponent},
  {'path':'**','component':PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
