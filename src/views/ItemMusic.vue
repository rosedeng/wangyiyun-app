<template>
 <ItemMusicTop :playlist="state.playlist"/>
 <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted,reactive } from "vue";
import {getMusicItemList,getItemList} from '@/request/api/item.js'
import ItemMusicTop from '@/components/item/ItemMusicTop.vue'
import ItemMusicList from '@/components/item/ItemMusicList.vue'

export default{
    setup(){
        const state=reactive({
            playlist:{},
            itemList:[]
        });
        onMounted(async()=>{
            let id=useRoute().query.id
            //console.log(id)
            let res=await getMusicItemList(id);
            //console.log(res);
            state.playlist=res.data.playlist
            let result=await getItemList(id)
            //console.log(result)
            state.itemList=result.data.songs
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        });
        return {state}
    },
    components:{
        ItemMusicTop,ItemMusicList,
    }
}
</script>