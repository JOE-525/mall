<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:itemIcon>
				<img src="~assets/img/tabBar/home.svg" alt="">
			</template>
			<template v-slot:itemIconActive>
				<img src="~assets/img/tabBar/home-active.svg" alt="">
			</template>
      <template v-slot:itemText>
				<div>首页</div>
			</template>
    </tab-bar-item>
		<tab-bar-item path="/classify">
			<template v-slot:itemIcon>
				<img src="~assets/img/tabBar/classify.svg" alt="">
			</template>
			<template v-slot:itemIconActive>
				<img src="~assets/img/tabBar/classify-active.svg" alt="">
			</template>
			<template v-slot:itemText>
				<div>分类</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="/shoppingCart">
			<template v-slot:itemIcon>
				<img src="~assets/img/tabBar/shoppingCart.svg" alt="">
			</template>
			<template v-slot:itemIconActive>
				<img src="~assets/img/tabBar/shoppingCart-active.svg" alt="">
			</template>
			<template v-slot:itemText>
				<div>购物车</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="/profile">
			<template v-slot:itemIcon>
				<img src="~assets/img/tabBar/profile.svg" alt="">
			</template>
			<template v-slot:itemIconActive>
				<img src="~assets/img/tabBar/profile-active.svg" alt="">
			</template>
			<template v-slot:itemText>
				<div>我的</div>
			</template>
		</tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'common/tabbar/TabBar'
  import TabBarItem from "common/tabbar/TabBarItem"

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
