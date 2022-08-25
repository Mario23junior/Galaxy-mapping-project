import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalaxyListComponent } from './components/galaxy-list/galaxy-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
 
const routes: Routes = [
  {
    path: '',
    component: NavComponent, children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path:'list',
        component:GalaxyListComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
