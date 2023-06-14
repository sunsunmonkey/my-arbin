import ZzkRequest from "..";

export  function getEntireRoomList(offset=0,size=20){
    return ZzkRequest.get({
        url:"entire/list",
        params:{
            offset,
            size
        }
    })
}