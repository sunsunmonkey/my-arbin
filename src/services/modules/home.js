import ZzkRequest from "../index";

export function getHomeGoodPriceData(){
    return ZzkRequest.get({url: "/home/goodprice"})
}