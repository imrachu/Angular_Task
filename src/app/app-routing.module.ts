import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test2Component } from './test2/test2.component';
import { ParentComponent } from './parent/parent.component';

const routes : Routes = [
  { path: '', redirectTo: 'test2', pathMatch: 'full'},
  { path: 'test2', component: Test2Component},
  { path: 'parent', component: ParentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
