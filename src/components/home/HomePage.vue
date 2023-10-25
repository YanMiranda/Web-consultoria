<template>
    <el-carousel class="custom-carousel" :interval="10000" type="card" height="580px">
      <el-carousel-item>
        <FitCard/>
      </el-carousel-item>
      <el-carousel-item>
        <AdvancedCard/>
      </el-carousel-item>
      <el-carousel-item>
        <PremiumCard/>
      </el-carousel-item>
    </el-carousel>
</template>

<script setup>
import FitCard from './carouselCards/FitCard.vue'
import AdvancedCard from './carouselCards/AdvancedCard.vue'
import PremiumCard from './carouselCards/PremiumCard.vue'
</script>

<style scoped>
.custom-carousel {
  margin-top: 100px;
  cursor: auto;
}
</style>
