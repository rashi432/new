import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AllComponent } from './all/all.component';
import { SaveComponent } from './save/save.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{ path: 'signup', component: SignupComponent }],
  },

  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },

  //     { path: 'main-page',
  //   component: MainPageComponent,
  //   children: [
  //
  //     { path: 'save', component: SaveComponent },
  //   ],
  // },
  { path: 'all', component: AllComponent },
  { path: 'trash', component: TrashComponent },
  { path: 'search', component: SearchComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
