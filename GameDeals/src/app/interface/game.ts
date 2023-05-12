export interface GameDeal {
    _id:string;
    title:string;
    salePrice:string;
    normalPrice:string;
    thumb:string;
    steamRatingPercent:number;
    dealRating:number;
    isOnSale:number;
}
export class AddGame implements GameDeal{

    _id!:string
    title:string;
    salePrice:string;
    normalPrice:string;
    thumb:string;
    steamRatingPercent:number;
    dealRating:number;
    isOnSale:number;

    constructor( title:string, salePrice:string, normalPrice:string, thumb:string, steamRatingPercent:number, dealRating:number, isOnSale:number)
    {
        this.title = title;
        this.salePrice= salePrice;
        this.normalPrice = normalPrice;
        this.thumb = thumb;
        this.steamRatingPercent = steamRatingPercent;
        this.dealRating = dealRating;
        this.isOnSale = isOnSale;
    }
}
