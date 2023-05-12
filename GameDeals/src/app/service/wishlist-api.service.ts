import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError, catchError,tap } from 'rxjs';
import { GameDeal } from '../interface/game';
@Injectable({
  providedIn: 'root'
})
export class WishlistApiService {

  constructor() { }

}
