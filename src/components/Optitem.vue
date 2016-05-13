<style scoped>
	.module{
		border-bottom: 1px solid #eee;
	}
	.module:last-child{
		border-bottom: 1px solid #fff;
	}
	.content{
		margin: 20px 10px;
		border:1px solid #eee;
		background-color: #f9f9f9;
		border-radius: 5px;
	}
	.content .contentInfo{
		margin: 5px;
		padding: 5px 0px;
		font-size: 13px;
		color: #666;
		border-bottom: 1px solid #eee;
	}
	.content .contentInfo:last-child{
		border:none;
	}
	.content .contentInfo .left{
		width: 30%;
		display: inline-block;
		word-wrap:break-word;
		color: #55acef;
	}
	.content .contentInfo .right{
		width: 70%;
		display: inline-block;
	}
</style>
<template>
	<section class="module">
		<div 
			class="content"
			v-for="listItem in optLists">
			<p 
				class="contentInfo"
				v-for="list in listItem.list">
				<span class="left">{{list.key}}:</span><span class="right">{{list.value}}</span>
			</p>
		</div>
	</section>
</template>
<script>
	export default{
		props:['optLists'],
		data(){
			return {
				
			}
		}
	}
</script>