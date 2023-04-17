import { Component, OnInit } from '@angular/core';
import { GameDeal } from 'src/app/interface/game';
import { GamedealApiService } from 'src/app/service/gamedeal-api.service';
@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {
  gamesData:GameDeal | any;
  

  constructor(private _gamedealApiService:GamedealApiService){}

  ngOnInit(){
    this.getDeals();
  }

  getDeals(){
    this._gamedealApiService.getGameDeals().subscribe(gamesData =>
      { this.gamesData = gamesData
    });
  }
}
