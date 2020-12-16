<template>
  <div class="about">
      <p>请上传</p>
      <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
export default {
  name: 'About',
  components:{
    HelloWorld
  },
  data () {
    return {
    
    }
  },
  methods:{
  },
  watch:{
  },
  
  mounted(){
  }
}
</script>

<style scoped>
/* style 标签必须添加 scoped 防止css被组件之间重叠*/

</style>

