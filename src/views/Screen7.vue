<template>
  <div class="finish">
    <h1>Dirija-se ao totem de atendimento, suas informações já estão com nossa equipe.</h1>
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
  </div>
</template>
<style scoped>
.finish {
  padding: 60px 30px 0px 30px;
  background-color: white;
  height: 100%;
}
h1 {
    color: #004186;
}

</style>>

<script>
import QrcodeVue from "qrcode.vue";
export default {
  data() {
    const patient = JSON.parse(localStorage.getItem('patient'))

    return {
      value: patient.cpf,
      size: 300
    };
  },
  components: {
    QrcodeVue
  }
};
</script>