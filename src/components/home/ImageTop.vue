<template>
  <div class="image-container">
    <img src="../img/FUNDO_CORTADO.png" alt="FUNDO_CORTADO" :class="(isMobile) ? 'custom-img-mobile' : 'custom-img-top'" />
    <!-- <img v-else src="../img/FUNDO.png" alt="FUNDO_CORTADO" :class="(isMobile) ? 'custom-img-mobile' : 'custom-img-top'" /> -->
    <el-button
      :class="(isMobile) ? 'custom-button-color overlay-button-mobile' : 'custom-button-color overlay-button'"
      :size="(isMobile) ? 'small' : 'large'"
      @click="scrollToPlans"
    >
      Descubra os planos
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'ImageTop',

  methods: {
    scrollToPlans() {
      this.$emit('scroll-to-plans');
    }
  },
};
</script>

<style scoped>
@import '../../assets/main.css';
.custom-img-top {
  width: 100%;
  height: 100%;
}

.custom-img-mobile {
  width: 100%;
  height: 100%;
}

.image-container {
  position: relative;
}

.overlay-button {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.overlay-button-mobile {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
