<style scoped>
	.header{
		background-color: #55acef;
		display: flex;
		justify-content:space-between;
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
	.center{
	  font-size: 16px;
	  padding-left: 10px;
	  font-weight: normal;
	  font-family: "微软雅黑";
	}
	.right .fa{
		font-size: 20px;
		width: 25px;
		height: 25px; 
		text-align: center;
	}


	.slide-mask{
		width: 100%;
		background: rgba(120,120,120,0.7);
		position: absolute;
		height: calc(100% - 50px);
		overflow: scroll;
		/*display: none;*/
	}
	.slide{
		background-color: #fff;
		opacity: 1;
		margin: 0;
		padding: 10px 0;
	}
	.slide li{
		list-style: none;
		text-align: center;
		height: 40px;
		line-height: 40px;
		border-bottom:1px solid #eee; 
	}
	.slide li a{
		text-decoration: none;
		color: #333;
	}
	.sorry{
	  text-align: center;
	  margin:0;
	}
	.bounce-transition {
	  display: inline-block; /* 否则 scale 动画不起作用 */
	}
	.bounce-enter {
	  animation: bounce-in .1s;
	}
	.bounce-leave {
	  animation: bounce-out .1s;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    /*transform: scale(1.5);*/
	  }
	  100% {
	    transform: scale(1);
	  }
	}
	@keyframes bounce-out {
	  0% {
	    transform: scale(1);
	  }
	  50% {
	    /*transform: scale(1.5);*/
	  }
	  100% {
	    transform: scale(0);
	  }
	}
</style>

<template>
	<header class="header">
		<slot name="left">
			<a class="left" @click.stop.prevent="toPrepage"><i class="fa fa-angle-left" ></i></a>
		</slot>
  	<slot name="center">
  		<a class="center" href="#" @click.stop.prevent="toggle">全部{{moduleName}}<i class="fa fa-angle-down" ></i></a>
  	</slot>
  	<slot name="right">
	  	<a class="right" v-link="{ path: '/Search/' }"><i class="fa fa-search" ></i></a>
	  </slot>
  </header>
  <div class="slide-mask" v-show="maskShow" @click.stop.prevent="toggle" transition="bounce">
  	<ul class="slide" 
  			@click.stop.prevent 
  			v-if="moduleSearchlist.length">
  		<li v-for='item in moduleSearchlist' 
  				@click.stop.prevent="searchObj(item.searchParams)" >
  			<a >{{item.searchName}}（{{item.nums}}）</a>
  		</li>
  	</ul>
  	<ul class="slide" 
  			@click.stop.prevent 
  			v-else>
  		<li><p class="sorry">对不起，您暂时还没有数据</p></li>
  	</ul>
  </div>
  <mask v-if="mask.maskShow"></mask>
</template>

<script>
	import mask from '../components/mask.vue'
	export default{
		components:{
	    mask
	  },
		name: 'Snheader',
		props:['moduleName','moduleSearchlist'],
	  data () {
	    return {
	      maskShow:false,
	      mask:{
	      	maskShow:false,
	      }
	    }
	  },
	  methods:{
	  	toggle(){
	  		this.maskShow=!this.maskShow
	  	},
	  	searchObj(param){
	  		// console.log("传入的参数是："+param)
	  		this.mask.maskShow=true
	  		this.$http.get('/src/store/test3.json', {}, {
		      headers: {
		        "X-Requested-With": "XMLHttpRequest"
		      },
		      emulateJSON: true
		    }).then(function(response) {
		      var data = response.data
		      this.$dispatch('object-list',data.objectList)//派发事件，事件沿着父链冒泡
		      this.maskShow=!this.maskShow//切换遮罩层
		      this.mask.maskShow=false
		    }, function(response) {
		      // handle error
		      this.mask.maskShow=false
		      console.log(response.data)
		    })
	  	},
	  	toPrepage(){
	  		window.history.go(-1)
	  	}
	  }
	}
	
</script>