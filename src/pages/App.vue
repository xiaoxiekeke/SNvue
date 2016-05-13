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
.sorry{
  text-align: center;
  margin: 50px 0;
}
</style>
<template>
  <div class="app">
    <Snheader 
      :module-name='moduleName'
      :module-searchlist='moduleSearchlist'
      >
    </Snheader>
  	<ul class="items"
        v-if="objectList.length">
      <Snitem 
        v-for="obj in objectList" 
        :obj="obj"
        :index="$index">
      </Snitem>
  	</ul>
    <p class="sorry" v-else>对不起，您暂时还没有数据</p>
  </div>
</template>

<script>
import Snheader from '../components/Snheader.vue'
import Snitem from '../components/Snitem.vue'
export default {
  components:{
    Snheader,
    Snitem
  },
  data:function(){
    return {
      moduleName:"客户",
      objectList:[{
        objId:1,
        objName:"客户1",
        CreateTime:"01-17 16:20"
      },{
        objId:2,
        objName:"客户2",
        CreateTime:"01-18 16:20"
      },{
        objId:3,
        objName:"客户3",
        CreateTime:"01-18 16:20"
      },{
        objId:4,
        objName:"客户4",
        CreateTime:"01-18 16:20"
      }],
      moduleSearchlist:[{
        searchName:"全部客户",
        nums:20,
        searchParams:1
      },{
        searchName:"我负责的客户",
        nums:10,
        searchParams:2
      },{
        searchName:"我关注的客户",
        nums:7,
        searchParams:3
      },{
        searchName:"我参与的客户",
        nums:5,
        searchParams:4
      },{
        searchName:"7天未跟进客户",
        nums:5,
        searchParams:5
      }]
    }
  },
  ready:function(){
    this.$http.get('/src/store/test1.json', {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      emulateJSON: true
    }).then(function(response) {
      var data = response.data
      this.$data = data
    }, function(response) {
      // handle error
      console.log(response.data)
    })
  },
  
  events: {
    'object-list': function (msg) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      this.objectList=msg
    }
  }
  
}
</script>
