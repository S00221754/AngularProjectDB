import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError, catchError,tap } from 'rxjs';
import { GameDeal } from '../interface/game';
@Injectable({
  providedIn: 'root'
})
export class WishlistApiService {

  private _siteURL="http://localhost:5050/games/"

  constructor(private _http:HttpClient) { }

  getWishListItem():Observable<any>{
    return this._http.get<GameDeal>(this._siteURL)
    .pipe(
      tap(listData => console.log('list data/error' + JSON.stringify(listData))
      ),
      catchError(this.handleError)
    );
  }

  addGame(game:GameDeal):Observable<any>{
    return this._http.post<GameDeal>(this._siteURL, game)
    .pipe(
      tap(listData => console.log('added to wishlist/error' + JSON.stringify(listData))
      ),
      catchError(this.handleError)
    )
  }
  deleteGame(gameID:GameDeal):Observable<any>{
    let deleteURL=this._siteURL+":"+gameID //might need to get rid of colon for this to work
    return this._http.delete(deleteURL)
    .pipe(
      tap(listData => console.log('deleted from wishlist/error' + JSON.stringify(listData))
      ),
      catchError(this.handleError)
    )
  }
  private handleError (err:HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return err.message;
  }
}
