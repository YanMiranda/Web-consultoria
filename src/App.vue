<template>
  <div class="backGround">
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
      <el-menu-item>
        <img src="./components/img/MARCA.png" alt="logo" class="logo" />
      </el-menu-item>
      <el-menu-item>
        <RouterLink to="/about">About</RouterLink>
      </el-menu-item>
    </el-menu>
    <HomePage/>

    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import HomePage from './components/home/HomePage.vue';
import { ref } from 'vue';

export default {
  components: {
    RouterLink,
    RouterView,
    HomePage
  },

  setup() {
    const isMobile = ref(false);
    return { isMobile };
  },



};
</script>

<style scoped>
.backGround{
  background-image: './components/img/FUNDO.png';
}

.logo {
  width: 200px; /* Tamanho da logo para desktop */
}

</style>
