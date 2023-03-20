import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestcomponentAComponent } from './testcomponent-a/testcomponent-a.component';

const routes: Routes = [{path:'',component:TestcomponentAComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TestRoutingModule { }