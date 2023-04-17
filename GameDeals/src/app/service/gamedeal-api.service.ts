import { Injectable } from '@angular/core';

import{HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError, catchError,tap } from 'rxjs';
import { GameDeal } from '../interface/game';
@Injectable({
  providedIn: 'root'
})
export class GamedealApiService {

  private _apiURL="https://www.cheapshark.com/api/1.0/";
  private _deals="deals?"
  constructor(private _http:HttpClient) { }

  getGameDeals():Observable<any>{
    return this._http.get<GameDeal>(this._apiURL + this._deals)
    .pipe(
      tap(data => console.log('game data/error') + JSON.stringify(data)
      ),
      catchError(this.handleError)
    )
  }
  
  private handleError (err:HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return err.message;
  }
}
