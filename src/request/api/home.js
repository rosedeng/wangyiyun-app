import service from "..";
 export function getBanner(){
    return service({
        method:"GET",
        url:"/banner?type=2",
    })
}
export function getMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=10"
    })
}
export function getSearchMusic(data){
return service({
    method:"GET",
    url:`/search?keywords=${data}`
})
}
export function getPhoneLogin(data){
    return service({
        method:"GET",
        url:`/register/anonimous`
    })
}
// export function getLoginUser(data){
//     return service({
//         method:"GET",
//         url:`/user/detail?uid=${data}`
//     })
// }

