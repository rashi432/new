import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AllComponent } from './all/all.component';
import { SaveComponent } from './save/save.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{ path: 'signup', component: SignupComponent }],
  },
  { path: 'login', component: LoginComponent },

  //     { path: 'main-page',
  //   component: MainPageComponent,
  //   children: [
  //     { path: 'all', component: AllComponent },
  //     { path: 'save', component: SaveComponent },
  //   ],
  // },
  { path: 'tasks', component: TasksComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
