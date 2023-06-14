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

export function getHomeRecommenddest(){
    return ZzkRequest.get({url: "home/hotrecommenddest"})
}

export function getHomeLongfor(){
    return ZzkRequest.get({url: "home/longfor"})
}

export function  getHomePlusData(){
    return ZzkRequest.get({url: "home/plus"})
}

