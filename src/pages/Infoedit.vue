<style scoped>
.app{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction:column;
}
.center{
  font-size: 16px;
  padding-left: 10px;
  font-weight: normal;
  font-family: "微软雅黑";
  color: #fff;
}
.right{
  font-size: 16px;
  color: #fff;
  padding-right: 10px;
  text-align: center;
}
.items{
  margin: 0;
  padding: 0;
  flex-grow:1;
  overflow: scroll;
  background-color: #f9f9f9;
}
.items .sec{
  background-color: #fff;
  margin-top: 10px;
  padding: 0;
}
.items .sec .secHeader{
  padding: 1px;
  height: 30px;
  border-bottom: 1px solid #eee;
}
.items .sec .secHeader h2{
  margin: 0 auto;
  width: 90%;
  font-size: 16px;
  line-height: 30px;
  color: #55acef;
  font-weight: normal;
}
.items .sec .secContent{
  margin: 0;
  padding: 0
}
.secList{
  list-style: none;
  width: 90%;
  margin: 0 auto;
  height: 50px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items:center;
}
.secList .listLeft{
  width: 30%;
  font-size: 14px;
}
.secList .listRight{
  outline: none;
  border: none;
}
</style>
<template>
  <div class="app">
    <Snheader
    :module-searchlist='moduleSearchlist'>
      <a slot="center" class="center">编辑客户</a>
      <a slot="right" class="right" @click="save()">保存</a>
    </Snheader>
    <div class="items">
      <!-- <section class="sec">
        <header class="secHeader"><h2>公司基本信息</h2></header>
        <ul class="secContent">
          <li class="secList"><span class="listLeft">客户名称</span><input class="listRight" type="text" placeholder="客户名称"></li>
          <li class="secList"><span class="listLeft">客户简称</span><input class="listRight" type="text" placeholder="客户简称"></li>
          <li class="secList"><span class="listLeft">母公司</span><input class="listRight" type="text" placeholder="母公司"></li>
          <li class="secList"><span class="listLeft">负责人</span>
            <select class="listRight">
              <option>1213</option>
              <option>1213</option>
              <option>1213</option>
              <option>1213</option>
            </select>
          </li>
          <li class="secList"><span class="listLeft">英文名称</span><input class="listRight" type="text" placeholder="英文名称"></li>
          <li class="secList"><span class="listLeft">客户编号</span><input class="listRight" type="text" placeholder="ACC4266"></li>
          <li class="secList"><span class="listLeft">提醒负责人</span><input class="listRight" type="checkbox" placeholder="提醒负责人"></li>
          <li class="secList"><span class="listLeft">描述</span><input class="listRight" type="text" placeholder="描述"></li>
        </ul>
      </section> -->

      <section class="sec">
        <header class="secHeader"><h2>公司基本信息</h2></header>
        <ul class="secContent">
          <li class="secList" v-for="Item in editItems">
            <span class="listLeft">{{Item.key}}</span>
            <input v-if="Item.type=='text'||Item.type=='textarea'" value="{{Item.value}}" class="listRight" type="text" placeholder="{{Item.key}}">
            <select v-if="Item.type=='select'" class="listRight">
              <option v-for="opt in Item.opts" value="{{opt.value}}">{{opt.text}}</option>
            </select>
            <input v-if="Item.type=='checkbox'||Item.type=='radio'" class="listRight" type="checkbox" checked="{{Item.value}}" placeholder="{{Item.key}}">
          </li>
        </ul>
      </section>

      <!-- <section class="sec">
        <header class="secHeader"><h2>详细信息</h2></header>
        <ul class="secContent">
          <li class="secList"><span class="listLeft">类型</span><input class="listRight" type="text" placeholder="类型"></li>
          <li class="secList"><span class="listLeft">行业</span><input class="listRight" type="text" placeholder="高科技"></li>
          <li class="secList"><span class="listLeft">二级行业</span><input class="listRight" type="text" placeholder="二级行业"></li>
        </ul>
      </section> -->
      <mask v-if="mask.showMask">
        <span slot="font">{{mask.maskInfo}}</span>
      </mask>
    </div>
  </div>
</template>

<script>
import Snheader from '../components/Snheader.vue'
import mask from '../components/mask.vue'
export default {
  components:{
    Snheader,
    mask
  },
  data(){
    return{
      moduleSearchlist:[],
      editItems:[
        {
          type:"text",
          key:"客户名称",
          value:"赛思互动科技有限公司"
        },
        {
          type:"text",
          key:"客户简称",
          value:"赛思互动"
        },
        {
          type:"text",
          key:"母公司",
          value:""
        },
        {
          type:"select",
          key:"负责人",
          opts:[
            {value:0,text:"管理员"},
            {value:1,text:"thomas"},
            {value:2,text:"james"},
            {value:3,text:"hicks"}
          ]
        },
        {
          type:"text",
          key:"英文名称",
          value:"salesplus"
        },
        {
          type:"checkbox",
          key:"提醒负责人",
          value:true
        },
        {
          type:"textarea",
          key:"描述",
          value:"this is desc"
        }
      ],
      mask:{
        showMask:false,
        maskInfo:"加载中。。。"
      }
    }
  },
  ready:function(){
    this.mask.showMask=true
    this.$http.get('/src/store/test6.json', {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      emulateJSON: true
    }).then(function(response) {
      this.mask.showMask=false
      var data = response.data
      this.editItems = data.editItems
    }, function(response) {
      // handle error
      console.log(response.data)
    })
  },
  methods:{
    save(){
      this.mask.showMask=true
      this.mask.maskInfo="保存中。。。"
      this.$http.post('/src/store/test6.json',this.editItems,{
        headers:{
          "X-Requested-With": "XMLHttpRequest"
        },
        emulateJSON:true
      }).then(function(data){
        this.mask.showMask=false
        var data = response.data
        alert("保存成功")
        window.history.go(-1);
      },function(response){
        this.mask.showMask=false
        console.log(response.data)
        alert("保存失败")
      })
    }
  }
  

}
</script>
