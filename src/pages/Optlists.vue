<style scoped>
	.center{
	  font-size: 16px;
	  padding-left: 0px;
	  font-weight: normal;
	  font-family: "微软雅黑";
	  color: #fff;
	}
	.right{
	  font-size: 16px;
	  color: #fff;
	  padding-right:10px; 
	  text-align: center;
	}
</style>
<template>
<div>
	<Snheader 
		:module-searchlist='moduleSearchlist'>
    <a slot="center" class="center">{{optName}}（{{optLists.length}}）</a>
    <a slot="right" class="right"></a>
  </Snheader>
  
  <!-- <ul class="items"> -->
  <Optitem 
  :opt-lists="optLists"
  v-if="optLists.length"></Optitem>
  <section v-else class="no-result">
    <p>暂时无内容！</p>
  </section>
  	<!-- </ul> -->
</div>
</template>
<script>
	import Snheader from '../components/Snheader.vue'
	import Optitem from '../components/Optitem.vue'
	export default{
		components:{
	    Snheader,
	    Optitem
	  },
	  data(){
	  	return{
	  		moduleSearchlist:[],
	  		optName:"销售机会",
	  		optLists:[{
	  			id:1,
	  			list:[{
	  				key:"状态",
	  				value:"held"
	  			},{
	  				key:"类型",
	  				value:"电话"
	  			},{
	  				key:"主题",
	  				value:"1"
	  			},{
	  				key:"关联于",
	  				value:""
	  			},{
	  				key:"开始日期和时间",
	  				value:"06-05-2016 11:05 AM"
	  			},{
	  				key:"Recurrence",
	  				value:"None"
	  			},{
	  				key:"负责人",
	  				value:"小可"
	  			}]
	  		},{
	  			id:1,
	  			list:[{
	  				key:"状态",
	  				value:"held"
	  			},{
	  				key:"类型",
	  				value:"电话"
	  			},{
	  				key:"主题",
	  				value:"1"
	  			},{
	  				key:"关联于",
	  				value:""
	  			},{
	  				key:"开始日期和时间",
	  				value:"06-05-2016 11:05 AM"
	  			},{
	  				key:"Recurrence",
	  				value:"None"
	  			},{
	  				key:"负责人",
	  				value:"小可"
	  			}]
	  		}],
	  	}
	  },
	  ready:function(){
	  	//console.log("传过来的id是："+this.$route.params.id)//用于发送请求查找数据
	    this.$http.get('/src/store/test5.json', {}, {
	      headers: {
	        "X-Requested-With": "XMLHttpRequest"
	      },
	      emulateJSON: true
	    }).then(function(response) {
	      var data = response.data
	      this.optLists=data.optLists
	      this.optName=data.optName
	    }, function(response) {
	      // handle error
	      console.log(response.data)
	    })
	  },
	}
</script>