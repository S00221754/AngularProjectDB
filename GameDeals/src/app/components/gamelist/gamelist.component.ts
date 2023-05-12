import { Component, OnInit } from '@angular/core';
import { GameDeal, AddGame } from 'src/app/interface/game';
import { GamedealApiService } from 'src/app/service/gamedeal-api.service';
import { WishlistApiService } from 'src/app/service/wishlist-api.service';
@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {
  dealData:GameDeal | any;
  topGameData:GameDeal | any;
  gameData:GameDeal | any;
  constructor(private _gamedealApiService:GamedealApiService, private _wishlistApiService:WishlistApiService){}

  ngOnInit(){
    this.getBestDeals();
    this.getTopGamesSale()
  }

  getBestDeals(){
    this._gamedealApiService.getBestDeals().subscribe(dealData =>
      { this.dealData = dealData
    });
  }
  getTopGamesSale(){
    this._gamedealApiService.getTopGamesOnSale().subscribe(topGameData =>
      { this.topGameData = topGameData
    });
  }
  addToWishList(title:string, salePrice:string, normalPrice:string, thumb:string, steamRatingPercent:number, dealRating:number, isOnSale:number):boolean{
    let addGame:GameDeal
    addGame= new AddGame(title,salePrice,normalPrice, thumb, steamRatingPercent, dealRating, isOnSale)
    this._wishlistApiService.addGame(addGame).subscribe(gameData =>
      {
        this.gameData= gameData
      });
    return false;
  }
}
