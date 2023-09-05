import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { RouterPathNames } from './enums/router-path-names';

const routes: Routes = [
{
  path:RouterPathNames.home,
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path:RouterPathNames.checkout,
  component: CheckoutComponent,
  pathMatch: 'full'
},
{
  path:RouterPathNames.empty,
  redirectTo: RouterPathNames.home,
  pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
