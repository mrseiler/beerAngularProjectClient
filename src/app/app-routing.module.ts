import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DrinkersSignupComponent } from './auth/drinkers-signup/drinkers-signup.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

//using children helps auth figure out what children it has 'can be used later for finishing up'
const routes: Route[] = [ 
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo:'/landing', pathMatch: 'full' },
  { path: '**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
