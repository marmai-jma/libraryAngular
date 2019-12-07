import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLibrariesComponent } from './component/list-libraries/list-libraries.component';
import { LibraryFormComponent } from './component/library-form/library-form.component';


const routes: Routes = [
  { path: 'liste', component: ListLibrariesComponent} ,
  {path: 'nouveau', component: LibraryFormComponent},
  {path: 'modifier/:id', component: LibraryFormComponent},
  {path: '', redirectTo : '/liste', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
