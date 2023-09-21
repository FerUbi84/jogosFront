import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameHubComponent } from './game-hub/game-hub.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'game_hub', component: GameHubComponent },
  {path:'',redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
