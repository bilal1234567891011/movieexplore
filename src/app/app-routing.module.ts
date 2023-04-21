import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashbord',component:DashbordComponent}, 
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
