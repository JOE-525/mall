<template>
		<nav-bar>
			<template v-slot:left>
				<div>返回</div>
			</template>
			<template v-slot:center>
				<div>搜索栏</div>
			</template>
			<template v-slot:right>
				<div>分类</div>
			</template>
		</nav-bar>
</template>

<script>
	import NavBar from "common/navbar/NavBar";

  export default {
    name: "HomeNavBar",
		components: {
			NavBar
		}
  }
</script>

<style scoped>

</style>
