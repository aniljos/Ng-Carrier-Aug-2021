import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductsModule } from './products/products.module';
import {Routes, RouterModule} from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { GadgetStoreModule } from './gadget-store/gadget-store.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

//configure the routers

const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "search", component: SearchComponent},
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**" , component: RouteNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent, 
    HelloComponent, 
    DataBindingComponent, 
    RouteNotFoundComponent, 
    SearchComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    ProductsModule,
    RouterModule.forRoot(routes),
    GadgetStoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
