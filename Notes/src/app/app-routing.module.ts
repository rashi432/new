import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AllComponent } from './all/all.component';


const routes: Routes = [
{path:'', component:MainPageComponent},
 {path:'tasks', component:TasksComponent},
 {path:'all', component:AllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
