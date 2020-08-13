<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  import requireURL from "../network/test";

  export default {
    name: "test",
    data() {
      return {
        msg: ''
      }
    },
    created() {
      requireURL({
        url: '/home/multidata'
      }).then(res => this.msg = res)
    }
  }
</script>

<style scoped>

</style>