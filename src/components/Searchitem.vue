<style scoped>
	.module{
		border-bottom: 1px solid #eee;
	}
	.module:last-child{
		border-bottom: 1px solid #fff;
	}
	.moduleHead{
		height: 60px;
		position: relative;
		padding: 1px;
	}
	.moduleHead .moduleIcon{
		position: absolute;
		left: 10px;
		top: 20px;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border: 1px solid #333;
		border-radius: 5px;

	}
	.moduleHead .moduleTitle{
		margin: 22px 0 0 60px;
		font-size: 18px;
	}
	.moduleHead .moduleResult{
		margin: 5px 0 0 60px;
		color: #666;
		font-size:14px;
	}
	.content{
		margin: 20px 10px;
		border:1px solid #eee;
		background-color: #f9f9f9;
		border-radius: 5px;
	}
	.content .contentHead{
		margin:12px 10px;
		font-size: 16px;
	}
	.content .contentInfo{
		margin: 12px 10px;
		font-size: 14px;
		color: #666;
	}
	.content .contentInfo .left{
		width: 25%;
		display: inline-block;
	}
	.content .contentInfo .right{
		width: 75%;
		display: inline-block;
	}
</style>
<template>
	
	<section
		class="module"
		v-for="result in searchResult">
		<header class="moduleHead">
			<span class="fa moduleIcon {{result.iconClass}}" ></span>
			<h2 class="moduleTitle">{{result.moduleName}}</h2>
			<p class="moduleResult">{{result.objlists.length}}个搜索结果</p>
		</header>
		<div 
			class="content"
			v-for="obj in result.objlists">
			<h3 class="contentHead">{{obj.objName}}</h3>
			<p 
				class="contentInfo"
				v-for="file in obj.objFiles">
				<span class="left">{{file.filekey}}</span><span class="right">{{file.filevalue}}</span>
			</p>
		</div>
	</section>
</template>
<script>
	export default{
		props:['searchResult'],
		data(){
			return {
				
			}
		}
	}
</script>