import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamelistComponent } from './components/gamelist/gamelist.component';
import { SearchgameComponent } from './components/searchgame/searchgame.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes:Routes=[
  {path:'', component:GamelistComponent},
  {path:'search', component:SearchgameComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'about', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GamelistComponent,
    SearchgameComponent,
    WishlistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
