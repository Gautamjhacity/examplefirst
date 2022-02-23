import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {path:'', component:BlogsComponent},
  {path:'home', component:BlogsComponent},
  {path: 'blog1', component:Blog1Component},
  {path: 'blog2', component:Blog2Component}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
