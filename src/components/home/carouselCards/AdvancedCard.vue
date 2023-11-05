<template>
  <el-card shadow="hover" class="box-card">
    <template #header>
      <div class="d-flex justify-content-md-center">
        <h2>Plano Advanced</h2>
      </div>
    </template>

    <!-- Itens inclusos nesse plano -->
    <div class="d-flex justify-content-between">
      <span style="font-weight: bold;">•Curso Preparatório para o parto (2h);</span>
      <el-icon size="large">
        <Check/>
      </el-icon>
    </div>
    <div style="margin-top: 7px;" class="d-flex justify-content-between">
      <span style="font-weight: bold;">•Acompanhamento de trabalho de parto (casa/hospital);</span>
      <el-icon size="large">
        <Check/>
      </el-icon>
    </div>
    <div style="margin-top: 7px;" class="d-flex justify-content-between">
      <span style="font-weight: bold;">•Uma consulta pós-parto;</span>
      <el-icon size="large">
        <Check/>
      </el-icon>
    </div>
    <div style="margin-top: 7px;" class="d-flex justify-content-between">
      <span style="font-weight: bold;">•Escalda pés após 38 semanas de gestação;</span>
      <el-icon size="large">
        <Check/>
      </el-icon>
    </div>
    <div style="margin-top: 7px;" class="d-flex justify-content-between">
      <span style="font-weight: bold;">•Auxílio para montar o plano de parto;</span>
      <el-icon size="large">
        <Check/>
      </el-icon>
    </div>
    <div style="margin-top: 7px;" class="d-flex justify-content-between">
      <span style="font-weight: bold;">•Visitas semanais ou de 15/15 dias a partir de 36 semanas;</span>
      <el-icon size="large">
        <Check/>
      </el-icon>
    </div>

        <!-- Itens NÃO inclusos nesse plano -->
    <div style="margin-top: 7px;" class="d-flex justify-content-between">
      <span>•Curso de cuidados com o bebê;</span>
      <el-icon size="large">
        <Close/>
      </el-icon>
    </div>
    <div style="margin-top: 7px;" class="d-flex justify-content-between">
      <span>•Acompanhamento pré-natal em domicílio a partir de 30 semanas uma vez por mes;</span>
      <el-icon size="large">
        <Close/>
      </el-icon>
    </div>

    <div class="content">
      <div style="margin-top: 15px;" class="d-flex justify-content-between align-items-center">
        <div class="custom-divider"></div>
          <a href="https://bit.ly/lis-consultoria-wpp" target="_blank">
            <el-button icon="InfoFilled" class="custom-button-color">Saiba mais!</el-button>
          </a>
        <div class="custom-divider"></div>
      </div>
    </div>

  </el-card>
</template>

<script>
export default {
  name: 'AdvancedCard'
}
</script>

<style scoped>
@import "@/assets/main.css";
</style>