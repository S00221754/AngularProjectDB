import { Injectable } from '@angular/core';

import{HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError, catchError,tap } from 'rxjs';
import { GameDeal } from '../interface/game';
@Injectable({
  providedIn: 'root'
})
export class GamedealApiService {

  private _apiURL="https://www.cheapshark.com/api/1.0/";
  private _dealKey="deals"
  private _topGameKey="deals?metacritic=85"
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
    return this._http.get<GameDeal>(this._apiURL + this._topGameKey)
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
