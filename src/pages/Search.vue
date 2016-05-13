<style scoped>
.app{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction:column;
}
.items{
  margin: 0;
  padding: 0;
  flex-grow:1;
  overflow: scroll;
}
.no-result p{
  text-align: center;
}

</style>
<template>
  <div class="app">
    <Searchheader ></Searchheader>
  	<ul class="items">
      <Searchitem 
      :search-result="searchResult"
      v-if="searchResult.length"></Searchitem>
      <section v-else class="no-result">
        <p>暂未搜到内容哦！</p>
      </section>
      
  	</ul>
  </div>
</template>

<script>
import Searchheader from '../components/searchHeader.vue'
import Searchitem from '../components/searchItem.vue'


export default {
  components:{
    Searchheader,
    Searchitem,
  },
  data(){
    return {
      searchResult:[],
    }
  },
  events: {
    'search-obj': function (msg) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      this.searchResult=msg
    }
  }
}
</script>
