import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScalculatorComponent } from './s-calculator/s-calculator.component';


import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'scalc',      component: ScalculatorComponent },
  { path: 'calc',      component: CalculatorComponent },
{ path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
