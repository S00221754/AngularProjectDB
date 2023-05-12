import { Component } from '@angular/core';
import { GameDeal } from 'src/app/interface/game';
import { GamedealApiService } from 'src/app/service/gamedeal-api.service';

@Component({
  selector: 'app-searchgame',
  templateUrl: './searchgame.component.html',
  styleUrls: ['./searchgame.component.css']
})
export class SearchgameComponent {
  gamesData:GameDeal | any;

  constructor(private _gamedealApiService:GamedealApiService){}

  getGameByTitle(gameTitle:string): boolean {
    this._gamedealApiService.getGameByTitle(gameTitle).subscribe(gamesData =>{
      this.gamesData = gamesData
    }
      
    )
    return false;
  }
}
