import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutGocComponent } from './about-goc/about-goc.component';
import { ShweGingaComponent } from './shwe-ginga/shwe-ginga.component';
import { BlogModelComponent } from './shwe-ginga/blog-model/blog-model.component';
import { NgwWowModule } from 'ngx-wow';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutGocComponent,
    ShweGingaComponent,
    BlogModelComponent,
    HomeComponent,
    SliderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


