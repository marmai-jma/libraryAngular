import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './component/library/library.component';
import { DisplayDataComponent } from './component/display-data/display-data.component';
import { ListLibrariesComponent } from './component/list-libraries/list-libraries.component';
import { LibraryFormComponent } from './component/library-form/library-form.component';
import { SearchComponent } from './component/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    DisplayDataComponent,
    ListLibrariesComponent,
    LibraryFormComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
