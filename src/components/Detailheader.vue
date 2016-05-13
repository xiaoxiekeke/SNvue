<style scoped>
.all{
	background-color: #55acef;
	overflow: hidden;
}
.header{
	background-color: #55acef;
	display: flex;
	justify-content:space-between;
	height: 50px;
	align-items:center;
	margin: 0;
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
.right .fa{
	font-size: 20px;
	width: 25px;
	height: 20px; 
	text-align: center;
}
.body{
	height:10px;
	margin: 0;
	padding:0;
	background: linear-gradient(top,#55acef,#bfdefc);
	min-height: 100px;
}
.body h2{
	margin:0;
	padding:0;
	text-align: center;
	color: #fff;
	height: 30px;
	line-height: 30px;
}
.module-name{
	font-size: 20px;
	font-weight: normal;
}
</style>

<template>
	<div class="all">
		<div class="header">
	  	<a class="left" href="#"><i class="fa fa-angle-left" ></i></a>
	  	<!-- <a class="center" href="#" >全部客户<i class="fa fa-angle-down" ></i></a> -->
	  	<a class="right" v-link="{ path: '' }"><i class="fa fa-ellipsis-h" ></i></a>
	  </div>
	  <div class="body">
	  	<h2 class="module-name">{{objName}}</h2>
	  	<h2 class="module-star"><i class="fa fa-star-o"></i></h2>
	  </div>
  </div>
</template>

<script>
	export default{
		name: 'Detailheader',
		props:['objName'],
	  data () {
	    return {
	      
	    }
	  },
	  methods:{
	  	
	  }
	}
	
</script>