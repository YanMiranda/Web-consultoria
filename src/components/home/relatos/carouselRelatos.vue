<template>
  <div class="row">
  <el-carousel class="col-4 carousel-relatos">
      <el-carousel-item>
        <img class="imgs" src="../../img/lis-preparto4.jpg" alt="Relato 1">
      </el-carousel-item>
    </el-carousel>
      <div class="col-8">
        <h3> relato 1</h3>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut id voluptatem consectetur inventore magni eum quibusdam quisquam laboriosam exercitationem dolorem accusamus
          provident, sint ex, pariatur adipisci? Consectetur, ea voluptatibus?</span>
      </div>
    </div>
</template>
<script>
export default{
  name: 'CarouselRelatos',
}
</script>
<style scoped>
.carousel-relatos {
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.imgs {
  width: 300px;
  height: 300px;
  object-fit: cover; /* Para manter a proporção e preencher o espaço sem distorção */
}
</style>
