import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SavedNewsComponent } from './saved-news/saved-news.component';
import { SearchComponent } from './search/search.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VerifyNewsComponent } from './verify-news/verify-news.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component:SignInComponent },
  { path: 'verify-news', component:VerifyNewsComponent },
  { path: 'saved-news', component:SavedNewsComponent },
  { path: 'search', component: SearchComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
