import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackHoleComponent } from './components/black-hole/black-hole.component';
import { DayPhotoComponent } from './components/day-photo/day-photo.component';
import { GalaryGalaxyComponent } from './components/galary-galaxy/galary-galaxy.component';
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
      },
      {
        path:'gallery',
        component:GalaryGalaxyComponent
      },
      {
        path:'fotoDay',
        component:DayPhotoComponent
      },
      {
        path:'blackHole',
        component:BlackHoleComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
