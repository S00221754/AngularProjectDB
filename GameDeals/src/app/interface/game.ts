export interface GameDeal {
    title:string;
    salePrice:string;
    normalPrice:string;
    thumb:string;
    steamRatingPercent:number;
    dealRating:number;
    isOnSale:number;
}
export class AddGame implements GameDeal{

    title:string;
    salePrice:string;
    normalPrice:string;
    thumb:string;
    steamRatingPercent:number;
    dealRating:number;
    isOnSale:number;

    constructor(title:string, salePrice:string, normalPrice:string, thumb:string, steamRatingPercent:number, dealRating:number, isONSale:number)
    {
        this.title = title;
        this.salePrice= salePrice;
        this.normalPrice = normalPrice;
        this.thumb = thumb;
        this.steamRatingPercent = steamRatingPercent;
        this.dealRating = dealRating;
        this.isOnSale = isONSale;
    }
}
