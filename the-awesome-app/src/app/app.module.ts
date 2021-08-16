import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductsModule } from './products/products.module';
import {Routes, RouterModule} from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { GadgetStoreModule } from './gadget-store/gadget-store.module';

//configure the routers

const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**" , component: RouteNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, RouteNotFoundComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ProductsModule,
    RouterModule.forRoot(routes),
    GadgetStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
