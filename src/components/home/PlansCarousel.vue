<template>
    <el-carousel arrow="hover" :class="(isMobile) ? 'custom-carousel-mobile' : 'custom-carousel'" :interval="10000" :type="(isMobile) ? '' : 'card'" height="580px">
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

<script>
import FitCard from './carouselCards/FitCard.vue';
import AdvancedCard from './carouselCards/AdvancedCard.vue';
import PremiumCard from './carouselCards/PremiumCard.vue';
export default{

  components: {
    FitCard,
    AdvancedCard,
    PremiumCard
  },

}
</script>

<style scoped>
.custom-carousel {
  margin-top: 100px;
  margin-bottom: 50px;
  cursor: auto;
}

.custom-carousel-mobile {
  margin-top: 30px;
  margin-bottom: 50px;
  width: 100%;
}
</style>
