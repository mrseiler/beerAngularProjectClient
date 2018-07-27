import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DrinkersLoginComponent } from './auth/drinkers-login/drinkers-login.component';
import { DrinkersSignupComponent } from './auth/drinkers-signup/drinkers-signup.component';
import { BeersComponent } from './beers/beers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { AuthGuard } from './guards/auth.guard';
import { YourBeersComponent } from './beers/your-beers/your-beers.component';

//using children helps auth figure out what children it has 'can be used later for finishing up'
const routes: Route[] = [ 
  { path: '', redirectTo:'/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'signup', component: DrinkersSignupComponent },
  { path: 'login', component: DrinkersLoginComponent},
  { path: 'mainnav', canActivate: [AuthGuard],component: MainNavComponent, children: [
    {path: 'home', component: DashboardComponent},
    {path: 'beers', component: BeersComponent, children: [
      { path: 'yourbeers', component: YourBeersComponent }
    ]},
    {path: 'account', component: DrinkersComponent}
  ]},
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
