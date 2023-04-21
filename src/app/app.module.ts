import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashbordComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    MovieDetailesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
