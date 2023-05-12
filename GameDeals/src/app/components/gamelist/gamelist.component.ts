import { Component, OnInit } from '@angular/core';
import { GameDeal } from 'src/app/interface/game';
import { GamedealApiService } from 'src/app/service/gamedeal-api.service';
@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {
  dealData:GameDeal | any;
  topGameData:GameDeal | any;

  constructor(private _gamedealApiService:GamedealApiService){}

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
}
