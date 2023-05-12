import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { GameDeal, AddGame } from 'src/app/interface/game';
import { WishlistApiService } from 'src/app/service/wishlist-api.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
  gameData:GameDeal | any
  gameimagewidth = 300;
  gameimageheight = 200;
  @Output() removeGameEvent = new EventEmitter<string>();
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
  removeGame(gameId: GameDeal) {
    this._wishListApiService.deleteGame(gameId).subscribe((result: any) => {
      console.log(result);
      this.refreshList();
    });
    this.removeGameEvent.emit("car got deleted");

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
