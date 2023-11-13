<template>
  <el-card class="card-relatos col-12">
    <template #header>
      <div class="row">
      <img :class="(isMobile) ? 'col-1 logo-card-mobile' : 'col-1 logo-card'" src="../../img/LOGO.png" alt="Logo">
        <h2 :class="(isMobile) ? 'col-6 d-flex justify-content-center' : 'col-10 d-flex justify-content-center'" >Relatos</h2>
      </div>
    </template>

    <div :class="(isMobile) ? 'd-flex flex-column' : 'd-flex justify-content-start'">
      <el-carousel arrow="never" :class="(isMobile) ? 'col-12 carousel-relatos' : ' col-5 carousel-relatos'" :interval="10000" @change="updateDescription">
        <el-carousel-item>
          <img :class="(isMobile) ? 'imgs-mobile' : 'imgs'" src="../../img/relato01.jpg" alt="Relato 1">
        </el-carousel-item>

        <el-carousel-item>
          <img class="imgs" src="../../img/lis-preparto4.jpg" alt="Relato 2">
        </el-carousel-item>

        <el-carousel-item>
          <img class="imgs" src="../../img/lis-preparto-familia.jpg" alt="Relato 2">
        </el-carousel-item>
      </el-carousel>
      <div :class="(isMobile) ? 'align-self-center text-center' : 'align-self-center text-center'">
        <h5>{{ currentDescription.text }}</h5>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'CarouselRelatos',
  data() {
    return {
      currentDescription: {
        text: '"Lindeza não sei nem como te agradecer! Vc foi um anjo que Deus colocou em meu caminho pra cuidar de mim e da minha família no momento mais lindo de nossas vidas que foi o nascimento do no nosso Leozinho❣ Obrigada por tanto amor, tanto carinho, tanto respeito! Que Deus em sua infinita bondade possa  retribuir em bênçãos a vc e sua família!Um beijo nosso Léo, Jú e Leozinho 😘"',
      },
    };
  },
  methods: {
    updateDescription(index) {
      // Atualize a descrição com base no índice da imagem atual
      if (index === 0) {
        this.currentDescription.text = '"Lindeza não sei nem como te agradecer! Vc foi um anjo que Deus colocou em meu caminho pra cuidar de mim e da minha família no momento mais lindo de nossas vidas que foi o nascimento  do no nosso Leozinho❣ Obrigada por tanto amor, tanto carinho, tanto respeito! Que Deus em sua infinita bondade possa  retribuir em bênçãos a vc e sua família!Um beijo nosso Léo, Jú e Leozinho 😘"';
      } else if (index === 1) {
        this.currentDescription.text = '"Lindeza não sei nem como te agradecer! Vc foi um anjo que Deus colocou em meu caminho pra cuidar de mim e da minha família no momento mais lindo de nossas"';
      }
      // Adicione mais condições conforme necessário para outras imagens
    },
  },
};
</script>

<style scoped>
.card-relatos {
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #ffcfc6;
}
.carousel-relatos {
  max-width: 300px;
  margin-top: 8px;
  margin-bottom: 20px;
}

.imgs {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.imgs-mobile {
  width: 250px;
  height: 300px;
  object-fit: cover;
}

.logo-card {
  max-width: 90px;
  max-height: 90px;
}
.logo-card-mobile {
  max-width: 75px;
  max-height: 50px;
}
</style>
