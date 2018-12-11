import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

const routes : Routes = [
  { path:'', component:ContentComponent },
  { path:'login', component:LoginComponent }
]
@NgModule({
  exports:[ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
