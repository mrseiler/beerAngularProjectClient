import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrewersComponent } from './brewers/brewers.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import {
  MatToolbarModule, 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatCheckboxModule, 
  MatTableModule, 
  MatCardModule, 
  MatExpansionModule,
  MatSelectModule,
  MatGridListModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatPaginator, MatPaginatorModule, MatTreeModule, MatDialogModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthGuard } from './guards/auth.guard';
import { DrinkersSignupComponent } from './auth/drinkers-signup/drinkers-signup.component';
import { DrinkersLoginComponent } from './auth/drinkers-login/drinkers-login.component';
import { UIComponent } from './ui/ui.component';
import { FooterComponent } from './ui/footer/footer.component';
import { BeersComponent } from './beers/beers.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeerDialogBoxComponent } from './beer-dialog-box/beer-dialog-box.component';
import { AccountDialogComponent } from './account-dialog/account-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BrewersComponent,
    DrinkersComponent,
    AuthComponent,
    DrinkersSignupComponent, 
    DrinkersLoginComponent,
    UIComponent,
    FooterComponent,
    BeersComponent,
    MainNavComponent,
    DashboardComponent,
    BeerDialogBoxComponent,
    AccountDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTreeModule,
    MatDialogModule,
  ],
  entryComponents:[
    AccountDialogComponent,
    BeerDialogBoxComponent
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
