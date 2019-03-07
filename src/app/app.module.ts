import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {Router, Routes, RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { ScoresComponent } from './scores/scores.component';

//defining routes 
const appRoutes:Routes =[
  { path: 'clientes',
  component: ClientsComponent
},
{ path: 'dashboard',
component: DashboardComponent
},
{ path: 'sales',
component: SalesComponent
},
{ path: 'scores',
component: ScoresComponent
},
//defining default component to display
{path: '',
component: ClientsComponent,
pathMatch: 'full'
},
//defining error component to display (404 not found)
{path: '**', //two stars means that there's none of our app routes are hitten.
component: NotFoundComponent
},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClientsComponent,
    NotFoundComponent,
    DashboardComponent,
    SalesComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    RouterModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
