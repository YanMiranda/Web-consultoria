<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item>
      <carouselCard1/>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import carouselCard1 from './carouselCards/carouselCard1.vue'
</script>

<style scoped>

</style>
