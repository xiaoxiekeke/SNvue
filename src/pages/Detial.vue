<style scoped>
.Detial{
	/*display: flex;
	flex-direction:column;*/
	height: 100%;
}
</style>
<template>
	<div class="Detial">
		<Detailheader 
		:obj-name='objName'>
		</Detailheader>
		<Detailmenu 
		:obj-opts='objOpts'>
		</Detailmenu>
		<Detaildefault :obj-basicinfo='objBasicinfo'>
		</Detaildefault>
	</div>
</template>
<script>
import Detailheader from '../components/Detailheader.vue'
import Detailmenu from '../components/Detailmenu.vue'
import Detaildefault from '../components/Detaildefault.vue'
export default{
	components:{
    Detailheader,
    Detailmenu,
    Detaildefault
  },
  data:function(){
  	return {
  		objId:1,
		  objName:"北京塞斯互动科技有限公司",
		  objOpts:[{
		    optId:1,
		    optName:"联系人",
		    optNum:1
		  },{
		    optId:2,
		    optName:"销售机会",
		    optNum:2
		  },{
		    optId:3,
		    optName:"报价单",
		    optNum:0
		  },{
		    optId:4,
		    optName:"活动",
		    optNum:3
		  },{
		    optId:5,
		    optName:"合同",
		    optNum:3
		  }],
		  objBasicinfo:[{
		    infoKey:"客户名称",
		    infoValue:"北京塞斯互动科技有限公司"
		  },{
		  	infoKey:"客户简称",
		    infoValue:"塞斯互动"
		  },{
		  	infoKey:"母公司",
		    infoValue:""
		  },{
		  	infoKey:"负责人",
		    infoValue:"管理员"
		  },{
		  	infoKey:"英文名称",
		    infoValue:"Salesplus"
		  },{
		  	infoKey:"客户编号",
		    infoValue:"ACC4266"
		  },{
		  	infoKey:"题醒负责人",
		    infoValue:"提醒负责人"
		  },{
		  	infoKey:"描述",
		    infoValue:""
		  }],
		  objDetailAddress:[{
		  	infoKey:"账单地址",
		    infoValue:""
		  },{
		  	infoKey:"收货地址",
		    infoValue:""
		  },{
		    infoKey:"邮件编码",
		    infoValue:""
		  },{
		    infoKey:"市／县",
		    infoValue:""
		  },{
		    infoKey:"省／州",
		    infoValue:""
		  },{
		    infoKey:"国家",
		    infoValue:""
		  }]
  	}
  },
  ready:function(){
  	//console.log("传过来的id是："+this.$route.params.id)//用于发送请求查找数据
    this.$http.get('/src/store/test2.json', {}, {
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
}
</script>