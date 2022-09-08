import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodDayPhotoComponent } from './components/apod-day-photo/apod-day-photo.component';
import { BlackHoleComponent } from './components/black-hole/black-hole.component';
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
        path:'photo-nasa',
        component:ApodDayPhotoComponent
      },
      {
        path:'gallery',
        component:GalaryGalaxyComponent
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
