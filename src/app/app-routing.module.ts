import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  

  {
    path:'tasks',
    component:TasksComponent
  },
  {
    path:'tasks/add',
    component:AddTaskComponent
  },
  {
     path:"tasks/edit/:id",
     component:EditTaskComponent
  },
  {
     path:"tasks/:id",
     component:ViewTaskComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
