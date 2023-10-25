<template>
  <div class="container-fluid backGround">
    <div class="row">
      <div class="custom-div col-12">
        <el-menu background-color="#ffcfc6" class="el-menu-demo d-flex justify-content-md-between" mode="horizontal" :ellipsis="false">
          <el-menu-item>
            <img v-if="isMobile" src="./components/img/LOGO.png" alt="Mobile Logo" class="logo" />
            <img v-else src="./components/img/MARCA.png" alt="Desktop Logo" class="logoMarca" />
          </el-menu-item>
          <el-menu-item>
            <RouterLink to="/about">Sobre mim</RouterLink>
          </el-menu-item>
        </el-menu>

        <HomePage/>

        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import HomePage from './components/home/HomePage.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  components: {
    RouterLink,
    RouterView,
    HomePage
  },

  setup() {
    const isMobile = ref(false);

    const checkWindowSize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    onMounted(() => {
      checkWindowSize();
      window.addEventListener('resize', checkWindowSize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkWindowSize);
    });

    return { isMobile };
  }
};
</script>

<style scoped>
.custom-div {
  padding: 0;
}
.backGround{
  background-image: './components/img/FUNDO.png';
}

.logoMarca {
  width: 200px;
}

.logo {
  width: 50px;
}

</style>
