import { RouterModule, Routes } from '@angular/router';

import { GetComponent } from './details/get.component';
import { InsertComponent } from './insert/insert.component';
import { NgModule } from '@angular/core';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:'insert',component:InsertComponent},
{path:'get',component:GetComponent},
{path:'update/:id',component:UpdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
InsertComponent
