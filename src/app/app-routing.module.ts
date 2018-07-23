import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DrinkersLoginComponent } from './auth/drinkers-login/drinkers-login.component';

//using children helps auth figure out what children it has 'can be used later for finishing up'
const routes: Route[] = [ 
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: DrinkersLoginComponent},
  { path: '', redirectTo:'/auth', pathMatch: 'full' },
  { path: '**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
