import { Component,OnInit } from '@angular/core';
import { GameDeal, AddGame } from 'src/app/interface/game';
import { WishlistApiService } from 'src/app/service/wishlist-api.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
  gameData:GameDeal | any
  
  constructor(private _wishListApiService:WishlistApiService){}
  ngOnInit() {
    this.getList();
  }

  getList(){
    this._wishListApiService.getWishListItem().subscribe(gameData =>
      { 
        this.gameData = gameData
      });
  }

  // addToWishList(title:string, salePrice:string, normalPrice:string, thumb:string, steamRatingPercent:number, dealRating:number, isONSale:number):boolean{
  //   let addGame:GameDeal
  //   addGame= new AddGame(title,salePrice,normalPrice, thumb, steamRatingPercent, dealRating, isONSale)
  //   this._wishListApiService.addGame(addGame).subscribe(gameData =>
  //     {
  //       this.gameData= gameData
  //     });
  //   this.getList();
  //   return false;
  // }
  refreshList(){
    this.getList();
  }
}
