import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AllComponent } from './all/all.component';
import { SaveComponent } from './save/save.component';


const routes: Routes = [
{path:'', component:MainPageComponent, children:[

  {path:'all', component:AllComponent},
  {path:'save', component:SaveComponent}

]},
 {path:'tasks', component:TasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }