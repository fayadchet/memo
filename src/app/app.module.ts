import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Importer le module des routes
import { Routing } from './routing';
import { MemoComponent } from './components/memo/memo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Ajouter la class des routes
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
