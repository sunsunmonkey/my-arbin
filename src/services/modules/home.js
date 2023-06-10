import ZzkRequest from "../index";

export function getHomeGoodPriceData(){
    return ZzkRequest.get({url: "/home/goodprice"})
}

export function getHomeHighscore(){
    return ZzkRequest.get({url: "/home/highscore"})
}

export function getHomeDiscount(){
    return ZzkRequest.get({url: "/home/discount"})
}
