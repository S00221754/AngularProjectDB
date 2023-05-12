import { Injectable } from '@angular/core';

import{HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError, catchError,tap } from 'rxjs';
import { GameDeal } from '../interface/game';
@Injectable({
  providedIn: 'root'
})
export class GamedealApiService {

  private _apiURL="https://www.cheapshark.com/api/1.0/";
  private _dealKey="deals?"
  private _topGameKey="metacritic=85"
  private _titleKey="title="
  constructor(private _http:HttpClient) { }

  getBestDeals():Observable<any>{
    return this._http.get<GameDeal>(this._apiURL + this._dealKey)
    .pipe(
      tap(data => console.log('game data/error') + JSON.stringify(data)
      ),
      catchError(this.handleError)
    )
  }
  getTopGamesOnSale():Observable<any>{
    return this._http.get<GameDeal>(this._apiURL + this._dealKey + this._topGameKey)
    .pipe(
      tap(data => console.log('game data/error') + JSON.stringify(data)
      ),
      catchError(this.handleError)
    )
  }
  //This allows the ability to filter out games by price and store.
  getGamesByTitle(gameTitle: string, lowerPrice?: number, upperPrice?: number, storeID?: number): Observable<any>{
    let url = this._apiURL + this._dealKey + this._titleKey + gameTitle;
    if (lowerPrice != null) {
      url += "&lowerPrice=" + lowerPrice;
    }
    if (upperPrice != null) {
      url += "&upperPrice=" + upperPrice;
    }
    if (storeID != null) {
      url += "&storeID=" + storeID;
    }
    return this._http.get<GameDeal>(url)
    .pipe(
      tap(data => console.log('game data/error') + JSON.stringify(data)
      ),
      catchError(this.handleError)
    )
  }
  


  private handleError (err:HttpErrorResponse) {
    console.log('GameApiService: ' + err.message);
    return err.message;
  }
}
