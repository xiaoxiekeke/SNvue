<style scoped>
.item{
	border-bottom: 1px solid #eee;
	padding-left:10px;
}
.item a{
	text-decoration: none;
}
.item h2,p{
	margin: 10px;
}
.item h2{
	font-size: 16px;
	color: #000;
}
.item p time{
	margin-right: 5px;
	font-size: 14px;
	color: #666;
}
</style>

<template>
	<li class="item">
		<a v-link="{ path: '/Detial/'+obj.objId }">
			<h2>{{obj.objName}}</h2>
			<p><time>{{obj.CreateTime}}</time></p>
		</a>
	</li>
</template>

<script>
	export default{
		name: 'Snitem',
		props:['obj'],
	  data () {
	    return {
	      maskShow:false
	    }
	  },
	  methods:{
	  	toggle(){
	  		this.maskShow=!this.maskShow
	  	}
	  }
	}
</script>