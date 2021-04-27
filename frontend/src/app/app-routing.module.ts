import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SavedNewsComponent } from './saved-news/saved-news.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VerifyNewsComponent } from './verify-news/verify-news.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signin', component:SignInComponent },
  { path: 'verify-news', component:VerifyNewsComponent },
  { path: 'saved-news', component:SavedNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
