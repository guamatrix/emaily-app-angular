import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  { path: 'surveys', loadChildren: '../surveys/surveys.module#SurveysModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
