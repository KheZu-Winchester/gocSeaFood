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

import { FishComponent } from './fish/fish.component';
import { FishwaterfishesComponent } from './fishwaterfishes/fishwaterfishes.component';
import { OtherSeafoodExportsComponent } from './other-seafood-exports/other-seafood-exports.component';
import { SeawaterFishesComponent } from './seawater-fishes/seawater-fishes.component';
import { PrawnsComponent } from './prawns/prawns.component';
import { CrabsExportsComponent } from './crabs-exports/crabs-exports.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutGocComponent,
    ShweGingaComponent,
    BlogModelComponent,
    HomeComponent,
    SliderComponent,
    FishComponent,
    FishwaterfishesComponent,
    OtherSeafoodExportsComponent,
    SeawaterFishesComponent,
    PrawnsComponent,
    CrabsExportsComponent,
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


