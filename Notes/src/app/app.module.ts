import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { AllComponent } from './all/all.component';
import { SaveComponent } from './save/save.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TrashComponent } from './trash/trash.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    AllComponent,
    SaveComponent,
    SearchComponent,
    MainComponent,
    SignupComponent,
    LoginComponent,
    TrashComponent,
    LogoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
