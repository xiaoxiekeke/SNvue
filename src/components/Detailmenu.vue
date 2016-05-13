<style scoped>
.menus{
	height: 50px;
	width: 100%;
	margin: 0;
	padding: 0;
	overflow-x:auto;
	overflow-y:hidden; 
	display: flex;
	flex-direction:row;
	flex-wrap:nowrap;
	background-color: #fff;
}
.menus .menu{
	list-style: none;
	height: 50px;
	width: 25vw;
	display: flex;
	align-items:center;
	flex-shrink:0;
}
.menus .menu a{
	text-decoration: none;
	color: #333;
	display: inline-block;
	margin: 0 auto;
}
.menus .menu p{
	margin: 0;
	text-align: center;
}
</style>
<template>
	<ul class="menus">
		<li v-for="objOpt in objOpts" class="menu"><a v-link="{ path: '/Optlists/'+objOpt.optId }" ><p>{{objOpt.optNum}}</p><p>{{objOpt.optName}}</p></a></li>
	</ul>
</template>
<script>
	export default{
		props:['objOpts'],
		methods:{
			showOpt(param){
				
				// window.location.href="http://www.baidu.com"
			}
		}
	}
</script>