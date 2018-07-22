import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
const routes: Route[]= [
  
  // { path: '', component: },
  // { path: '', component: }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BrewerRoutingModule { }
