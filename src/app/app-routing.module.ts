import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { Content2Component } from './components/content2/content2.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'content',
    pathMatch: 'full'
  },
  {
    path: 'content',
    component: ContentComponent    
  },
  {
    path: 'content2',
    component: Content2Component
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
