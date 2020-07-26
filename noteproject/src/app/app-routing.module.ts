import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AllComponent } from './all/all.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'tasks', component:TasksComponent},
  {path:'all', component:AllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
