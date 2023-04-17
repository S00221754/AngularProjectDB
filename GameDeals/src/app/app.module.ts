import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamelistComponent } from './components/gamelist/gamelist.component';
import { SearchgameComponent } from './components/searchgame/searchgame.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AboutComponent } from './components/about/about.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
