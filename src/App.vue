<template>
  <div class="container-fluid backGround">
    <div class="row">
      <div class="custom-div col-12">
        <el-menu background-color="#FEFEFE" class="el-menu-demo d-flex justify-content-between" mode="horizontal" :ellipsis="false">
          <el-menu-item  menu-trigger="click">
            <img v-if="isMobile" src="./components/img/LOGO.png" alt="Mobile Logo" class="logo" />
            <img v-else src="./components/img/MARCA.png" alt="Desktop Logo" class="logoMarca" />
          </el-menu-item>
          <el-menu-item>
            <RouterLink to="/about">Sobre mim</RouterLink>
          </el-menu-item>
        </el-menu>

        <el-backtop class="custom-backtop-color" :right="(isMobile) ? 10 : 30" :bottom="100" />
        <HomePage/>

        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import HomePage from './components/home/HomePage.vue';

export default {
  components: {
    RouterLink,
    RouterView,
    HomePage
  },
};
</script>

<style scoped>
.custom-backtop-color {
  color: #fafafa;
  background-color: #b1857d;
}

.custom-backtop-color:hover {
  color: #fafafa;
  background-color: #976d65;
}
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
