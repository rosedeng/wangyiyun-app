import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/item.js'
import { getPhoneLogin } from '@/request/api/home.js'
export default createStore({
  state: {
playList:[{
      al:{
        id: 84562289,
        name: "观风月·竹马篇",
        pic: 109951164923015260,
        picUrl: "https://p1.music.126.net/taWBQliW8wLh_pqXElAeww==/109951164923015271.jpg",
        pic_str: "109951164923015271",
      },
        id:1412559986,
        ar:[{
          name:"吹灭小山河"
        }]
    }],
    playListIndex:0,
    isbtnShow:true,
    detailShow:false,
    lyricList:{},
    currentTime:0,
    duration:0,
    isLogin:false,
    isFooterMusic:true,
    cookie:''
    //isFooterShow:false
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow:function(state,value){
      state.isbtnShow=value
    },
    pushPlayList:function(state,value){
      state.playList.push(value)
    },
    updatePlayList:function(state,value){
      state.playList=value
      console.log(state.playList)
    },
    updatePlayListIndex:function(state,value){
      state.playListIndex=value
    },
    updateDetailShow:function(state){
      state.detailShow=!state.detailShow
    },
    updateLyricList:function(state,value){
      state.lyricList=value
    },
    updateCurrentTime:function(state,value){
      state.currentTime=value
      //console.log(state.currentTime)
    },
    updateDuration:function(state,value){
      state.duration=value
    },
    updateIsLogin:function(state,value){
      state.isLogin=true
    },
    updateCookie:function(state,value){
      state.cookie=value
      localStorage.setItem('cookie',state.cookie)
    }
  },
  actions: {
    getLyric:async function(context,value){
    let res=await getMusicLyric(value)
    console.log(res)
    context.commit("updateLyricList",res.data.lrc)
    },
    getLogin:async function(context,value){
      let res=await getPhoneLogin(value)
      console.log(res)
      return res
    }
  },
  modules: {
  }
})
