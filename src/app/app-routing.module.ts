import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishwaterfishesComponent } from './fishwaterfishes/fishwaterfishes.component';
import { HomeComponent } from './home/home.component';
import { PrawnsComponent } from './prawns/prawns.component';
import { SeawaterFishesComponent } from './seawater-fishes/seawater-fishes.component';
import { OtherSeafoodExportsComponent } from './other-seafood-exports/other-seafood-exports.component';
import { CrabsExportsComponent } from './crabs-exports/crabs-exports.component';
import { ShweGingaComponent } from './shwe-ginga/shwe-ginga.component';
import { AboutGocComponent } from './about-goc/about-goc.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path :'shwe-ginga',component : ShweGingaComponent},
  {path:'SeawaterFishes',component:SeawaterFishesComponent},
  {path:'fishwaterfishes',component:FishwaterfishesComponent},
  {path:'crabexports',component:CrabsExportsComponent},
  {path:'prawns',component:PrawnsComponent},
  {path:'OtherSeafood',component: OtherSeafoodExportsComponent},
  {path:'about',component: AboutGocComponent},
  {path:'contact',component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
