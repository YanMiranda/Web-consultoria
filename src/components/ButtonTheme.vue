<template>
  <el-button
    round
    color
    class="custom-button-color"
    :icon="(isDarkTheme) ? 'Sunny' : 'Moon'"
    @click="toggleTheme">
  </el-button>
</template>

<script>
export default {
  name: 'ButtonTheme',

  props: {
    isDarkTheme: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    toggleTheme() {
      this.$emit('toggle-theme');
    },
  },
};
</script>

<style scoped>

.custom-button-color {
  background-color: #b1857d;
  color: #fafafa;
}

.custom-button-color:hover {
  background-color: #976d65;
  color: #fafafa;
}

.custom-button-color:focus {
  background-color: #ffcfc6;
  color: #fafafa;
  border: #976d65;
}

</style>
