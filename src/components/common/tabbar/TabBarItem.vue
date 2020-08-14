<template>
  <div class="tab-bar-item" @click="btnClick">
		<div v-if="!isActive"><slot name="itemIcon" ></slot></div>
		<div v-else ><slot name="itemIconActive" /></div>
		<div :class="{active: isActive}"><slot name="itemText" /></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String
      }
    },
    methods: {
      btnClick() {
				this.$router.push(this.path).catch(err => {
					console.log(err);
				})
      }
    },
    computed: {
      isActive() {
				return this.$route.path.includes(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
  }

  .tab-bar-item img {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  .active {
    color: #d4237a
  }
</style>
