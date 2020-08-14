<template>
  <div id="nav-bar">
		<div class="nav-bar-left"><slot name="left"></slot></div>
		<div class="nav-bar-center"><slot name="center"></slot></div>
		<div class="nav-bar-right"><slot name="right"></slot></div>
	</div>
</template>

<script>
  export default {
    name: "NavBarItem"
  }
</script>

<style scoped>
	#nav-bar {
		display: flex;
		text-align: center;
		line-height: 44px;
	}

	.nav-bar-left {
		flex: 1;
		/*width: 60px;*/
		background-color: #42b983;
	}

	.nav-bar-center {
		flex: 3;
		background-color: var(--color-tint);
	}

	.nav-bar-right {
		flex: 1;
		/*width: 60px;*/
		background-color: #666666;
	}
</style>
