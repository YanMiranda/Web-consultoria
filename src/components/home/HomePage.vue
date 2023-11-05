<template>
  <div>
    <ImageTop @scroll-to-plans="scrollToPlans"/>
  </div>
  <div class="col-12">
    <PlansCarousel ref="plansCarousel" />
  </div>
</template>

<script>
import ImageTop from '@/components/home/ImageTop.vue'
import PlansCarousel from '@/components/home/PlansCarousel.vue'
export default {
  components: {
    PlansCarousel,
    ImageTop
  },

  methods: {
    scrollToPlans() {
      this.$nextTick(() => {
        const plansSection = this.$refs.plansCarousel.$el;
        if (plansSection) {
          plansSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
};
</script>
