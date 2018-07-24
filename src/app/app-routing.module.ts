import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DrinkersLoginComponent } from './auth/drinkers-login/drinkers-login.component';
import { DrinkersSignupComponent } from './auth/drinkers-signup/drinkers-signup.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { BeersComponent } from './beers/beers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';

//using children helps auth figure out what children it has 'can be used later for finishing up'
const routes: Route[] = [ 
  { path: 'auth', component: AuthComponent },
  { path: 'signup', component: DrinkersSignupComponent },
  { path: 'login', component: DrinkersLoginComponent},
  { path: 'mainnav', component: MainNavComponent},
  { path: 'home', component: DashboardComponent},
  { path: 'beer', component: BeersComponent},
  { path: '', redirectTo:'/auth', pathMatch: 'full' },
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
