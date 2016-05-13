<style scoped>
	.default{
		background: #fff;
		height: calc(100vh - 200px);
	}
	.defaultTitle{
		background: #eee;
		height: 50px;
		width: 100%;
		display: flex;
		align-items:center;
		justify-content:center;
	}
	.defaultTitle .tab{
		margin: 0;
		height: 34px;
		background: #fff;
		padding: 0;
		display: flex;
		width: 90%;
		border-radius:5px;
		overflow: hidden; 
	}
	.defaultTitle .tab li{
		list-style: none;
		width: 50%;
		text-align: center;
		line-height: 34px;
		height: 34px;
	}
	.defaultTitle .tab .tabActive{
		background-color: #e0e7ed;
	}
	.defaultBody{
		height: calc(100vh - 250px);
		display: flex;
		flex-direction:column;
	}
	.info{
		display: flex;
		flex-grow:1;
		flex-direction:column;
	}
	.infoHeader{
		flex-shrink:0;
		height: 30px;
		line-height: 30px;
		padding-left: 5%;
		color: #666;
		border-bottom: 1px solid #eee;
	}
	.infoContent{
		overflow: scroll;
		height: calc(100vh - 280px);
	}
	.infoLists{
		padding: 0;
		width: 90%;
		margin: 0 auto;
		height: 100%;
	}
	.infoItem{
		list-style: none;
		height: 50px;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items:center;
		justify-content:center;
		font-size: 14px;
	}
	.infoItem .itemKey{
		display: inline-block;
		width: 30%;
		color: #55acef;
	}
	.infoItem .itemValue{
		display: inline-block;
		width: 70%;
	}
	.infoFooter{
		height: 50px;
		border-top: 1px solid #eee;
		display: flex;
		align-items:center;
		justify-content:center;
		flex-shrink:0;
	}
	.infoFooter a{
		text-decoration: none;
		color: #55acef;
	}
	.dynamic{
		display: flex;
		flex-grow:1;
		flex-direction:column;
	}
	.dynamic iframe{
		width: 100%;
		display: flex;
		flex-grow:1;
		border: 0;
	}
	.fade-transition {
    transition: opacity .2s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>
<template>
	<section class="default">
		<div class="defaultTitle">
			<ul class="tab">
				<li class="{{show?'tabActive':''}}" 
						@click='toggleTab(true)'>资料</li>
				<li class="{{show?'':'tabActive'}}" 
						@click='toggleTab(false)'>动态</li>
			</ul>
		</div>
		<div class="defaultBody">
			<section class="info"
							 v-show="show"
							 transition="fade"
      				 transition-mode="out-in">
				<header class="infoHeader">公司基本信息</header>
				<div class="infoContent">
					<ul class="infoLists">
						<li class="infoItem" 
								v-for="infoItem in objBasicinfo">
							<span class="itemKey">{{infoItem.infoKey}}</span><span class="itemValue">{{infoItem.infoValue}}</span>
						</li>
					</ul>
				</div>
				<footer class="infoFooter"><a v-link="{ path: '/Infoedit/'+$route.params.id}"><i class="fa fa-edit">编辑资料</i></a></footer>
			</section>
			<section class="dynamic" 
								v-show="!show" 
								transition="fade"
					      transition-mode="out-in" >
				<iframe src="http://cn.vuejs.org/"></iframe>
			</section>
		</div>
	</section>
</template>
<script>
	export default {
		props:["objBasicinfo"],
		data(){
			return {
				show:true,
			}
		},
		methods:{
			toggleTab:function (argument) {
				this.show=argument
			}
		}
	}
</script>