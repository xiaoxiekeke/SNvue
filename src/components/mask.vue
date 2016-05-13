<style scoped>
	.SNrotate{
	  animation: rotate 1.5s infinite;
	}
	.mask{
	  position: absolute;
	  top: 0;
	  left: 0;
	  background-color: rgba(255,255,255,.8);
	  width: 100%;
	  height: 100%;
	  display: flex;
	  justify-content:center;
	  align-items:center;
	  z-index: 1000;
	}
	.mask p{
		font-size: 22px;
	}
	@keyframes rotate{
	  0%   {transform:rotate(0deg);}
	  100% {transform:rotate(360deg);}
	}
</style>
<template>
<div class="mask">
  <p>
  	<slot name="font">加载中...</slot>
  	<slot name="image"><img src="/src/image/logo.ico" class="SNrotate"></slot>
  </p>
</div>
</template>