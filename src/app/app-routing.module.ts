import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Route[] = [ 
  { path: '', redirectTo:'/landing', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent,children:  [  ]},//using children helps auth figure out what children it has 'can be used later for finishing up'
  {path: 'landing', component: LandingComponent},
  {path: '**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
