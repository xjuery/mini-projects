import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BledComponent } from './bled/bled.component';
import { ScredComponent } from './scred/scred.component';

const routes: Routes = [
  { path: '', component: BledComponent },
  { path: 'bled', component: BledComponent },
  { path: 'scred', component: ScredComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
