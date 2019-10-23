<template>
  <div class="home">
    <img src="https://www.rededorsaoluiz.com.br/assets/imgs/svg/logo-rededor-saoluiz.svg"/>
    <h1>
      Olá, vamos começar para agilizar o atendimento, informe CPF da criança.
    </h1>
    <!-- <input  type="text" placeholder="CPF"> -->
    <the-mask v-model="cpf"  id="cpf-input" :mask="['###.###.###-##']" placeholder="Insira seu CPF" />
    <Button style="position: fixed; bottom: 4vh;left: 22vw;" @click.native="patient()" text="Entendi"></Button>
    
  </div>
  
</template>

<style>
.home {
  padding: 2em;
}
h1 {
  text-align: left;
  padding-top: 30px;
  padding-bottom: 30px;
  color: white;
}
#cpf-input {
    height: 1.8em;
    width: 85%;
    border-radius: 8px;
    padding: 10px;
    border: none;
    margin: 10px 0px 10px 0px;
    font-size: 1.3em;
}
</style>

<script>
import Button from '../../src/components/Button.vue'
import axios from 'axios'
import {TheMask} from 'vue-the-mask'

export default {
  name: 'home',
  components: {
      Button,
      TheMask
  },
  data: () => ({
    cpf: '',
    isLoading: false
  }),
  async created() {
    if(this.$route.params.cpf) {
      const { data } =await axios.get(`public/patient/`+ this.$route.params.cpf)
      localStorage.setItem('patient', JSON.stringify(data.patient))
      localStorage.setItem('access-token', data.patient.accessToken)
      this.$router.push('/screen-4')
    }
  },
   methods: {
    async patient () {
      const { data } = await axios.get(`public/patient/`+ this.cpf.replace('.').replace('-').trim())

      try {
        if (data.patient) {
          localStorage.setItem('patient', JSON.stringify(data.patient))
          localStorage.setItem('access-token', data.patient.accessToken)
          this.$router.push('/screen-4')
        }
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
