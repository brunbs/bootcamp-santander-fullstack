import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';


const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/form',
    component: UserFormComponent
  },
  {
    path: 'users/form/:id',
    component: UserFormComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
