import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DrinkersLoginComponent } from './auth/drinkers-login/drinkers-login.component';
import { HomeComponent } from './home/home.component';
import { DrinkersSignupComponent } from './auth/drinkers-signup/drinkers-signup.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

//using children helps auth figure out what children it has 'can be used later for finishing up'
const routes: Route[] = [ 
<<<<<<< HEAD
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo:'/landing', pathMatch: 'full' },
=======
  { path: 'auth', component: AuthComponent },
  { path: 'signup', component: DrinkersSignupComponent },
  { path: 'login', component: DrinkersLoginComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo:'/auth', pathMatch: 'full' },
>>>>>>> 99464074863c4183aec5d6da6a3297b4f360adba
  { path: '**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
