<style scoped>
	.header{
		background-color: #55acef;
		display: flex;
		min-height: 50px;
		align-items:center;
	}
	.header a{
		color: #fff;
		text-decoration: none;
	}
	.header .fa{
		padding: 5px;
	}
	.left .fa{
		font-size: 30px;
		width: 20px;
		height: 30px; 
		text-align: center;
	}
	.search-area{
		background: #fff;
		min-height: 30px;
		border-radius: 20px;
		overflow: hidden;
		flex-grow:1;
		margin: 0 20px 0 10px;
		display: flex;
		justify-content:space-between;
	}
	.search-area .fa{
		width: 30px;
		height: 30px;
		line-height:30px;
		padding: 0;
		text-align: center;
		color: #aaa;
	}
	.search-area .search-input{
		flex-grow:1;
		outline: none;
		border: none;
	}
</style>

<template>
	<header class="header">
  	<a class="left" href="#"><i class="fa fa-angle-left" ></i></a>
  	<div class="search-area">
  		<i class="fa fa-search" @click.stop.prevent='searchObj'></i>
  		<input class="search-input"
  					 type="text" 
  					 v-model="searchParam" 
  					 placeholder="请输入您要搜索的内容"
  					 @keyup.13.stop.prevent="searchObj"
  					 >
  		<i class="fa fa-close" v-show="searchParam" @click.stop.prevent='clearSearchparam'></i>
  	</div>
  	<mask v-if="mask.showMask">
  		<span slot="font">{{mask.maskInfo}}</span>
  	</mask>
  </header>
</template>

<script>
	import mask from '../components/mask.vue'
	export default{
		components:{
	    mask
	  },
		name: 'Snheader',
	  data () {
	    return {
	      searchParam:"",
	      mask:{
	      	showMask:false,
	      	maskInfo:"搜索中。。。"
	      }
	    }
	  },
	  methods:{
	  	clearSearchparam(){
	  		this.searchParam=""
	  	},
	  	searchObj(){
	  		//显示加载中。。。
	  		this.mask.showMask=true
	  		this.$http.get('/src/store/test4.json', {}, {
		      headers: {
		        "X-Requested-With": "XMLHttpRequest"
		      },
		      emulateJSON: true
		    }).then(function(response) {
	    		//隐藏加载中。。。
		  		this.mask.showMask=false
		      var data = response.data
		      this.$dispatch("search-obj",data.searchResult)
		    }, function(response) {
		      // handle error
		      this.mask.showMask=false
		      this.mask.maskInfo="搜索失败"
		      console.log(response.data)
		    })
	  	},
	  	optPos(){
	  		this.$el.style.paddingTop='20px'
	  	},
	  	removePos(){
	  		this.$el.style.paddingTop='0px'
	  	}
	  }
	}
</script>