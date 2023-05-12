import { Component } from '@angular/core';
import { GameDeal, AddGame } from 'src/app/interface/game';
import { GamedealApiService } from 'src/app/service/gamedeal-api.service';
import { WishlistApiService } from 'src/app/service/wishlist-api.service';

@Component({
  selector: 'app-searchgame',
  templateUrl: './searchgame.component.html',
  styleUrls: ['./searchgame.component.css']
})
export class SearchgameComponent {
  gamesData:GameDeal | any;
  gameData:GameDeal | any;
  constructor(private _gamedealApiService:GamedealApiService, private _wishlistApiService:WishlistApiService){}

  //string has a default parameter
  getGamesByTitle(gameTitle: string = '', lowerPrice?: string, upperPrice?: string, storeID?: string): boolean {
    // Convert the price values to numbers
    const lower = lowerPrice ? parseInt(lowerPrice) : undefined;
    const upper = upperPrice ? parseInt(upperPrice) : undefined;
    const store = storeID ? parseInt(storeID) : undefined;
  
    // Check if at least one of the fields is not empty
    if (!gameTitle && !lower && !upper && !storeID) {
      console.log('Please enter at least one search parameter.');
      return false;
    }
    
    // Call the API with the updated values
    this._gamedealApiService.getGamesByTitle(gameTitle, lower, upper, store).subscribe(gamesData => {
      this.gamesData = gamesData;
    });
    return false;

    
  }
    addToWishList(title:string, salePrice:string, normalPrice:string, thumb:string, steamRatingPercent:number, dealRating:number, isONSale:number):boolean{
    let addGame:GameDeal
    addGame= new AddGame(title,salePrice,normalPrice, thumb, steamRatingPercent, dealRating, isONSale)
    this._wishlistApiService.addGame(addGame).subscribe(gameData =>
      {
        this.gameData= gameData
      });
    return false;
  }
  
}
