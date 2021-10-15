<template>
  <div>
    <h2 class="hu">欢迎来到峡谷！</h2>
    <span class="a">h哈哈哈<span class="b">gagag112222222</span></span>
    <img :src="src" alt="" style="width: 240px; height: 300px" />
  </div>
</template>
<script>
import img from './assets/img/222.jpg'
export default {
  data () {
    return {
      src: img
    }
  }
}
</script>
<style lang="less">
.hu {
  color: aqua;
}
</style>