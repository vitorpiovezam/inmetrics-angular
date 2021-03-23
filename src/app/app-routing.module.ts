import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  {
    path: 'product',
    children: [
      { path: 'new', component: NewComponent },
      { path: 'list', component: ListComponent }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
