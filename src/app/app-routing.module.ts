import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { NewMapComponent } from './views/new-map/new-map.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'newmap', component: NewMapComponent},
  {path: '**', redirectTo:'home'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
