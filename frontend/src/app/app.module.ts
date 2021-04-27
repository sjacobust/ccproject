import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VerifyNewsComponent } from './verify-news/verify-news.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SavedNewsComponent } from './saved-news/saved-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerifyNewsComponent,
    ProfileComponent,
    SignInComponent,
    LoginComponent,
    HomeComponent,
    SavedNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
