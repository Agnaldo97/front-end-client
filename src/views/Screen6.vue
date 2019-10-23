<template>
    <div>
      <div class="alert">
        Vá para a unidade selecionada, estamos peparando tudo para seu atendimento, ao chega ao hospital nos avise
      </div>
      <GmapMap
        :center="{lat:currentLocation.lat, lng:currentLocation.lng}"
        :zoom="17"
        map-type-id="terrain"
        style="width: 100%; height: 100vh"
        ref="map"
      >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
      </GmapMap>
      <Button class="button-hospital" text="Cheguei no hospital" @click.native="$router.push('/screen-7')"></Button>
    </div>
</template>
<style>
.button-hospital {
    position: fixed;
    bottom: 4vh;
    left: 22vw;
}
.alert {
    z-index: 1;
    position: absolute;
    top: 81px;
    left: 25px;
    border-radius: 6px;
    width: 80%;
    background-color: #DF8D2C;
    padding: 1em;
}
</style>
<script>
import {gmapApi} from 'vue2-google-maps'
import Button from '../../src/components/Button.vue'

export default {
  computed: {
    google: gmapApi
  },
  components: {
    Button
  },
  data() {
    return {
      lat: 0,
      lng: 0,
      currentLocation: {},
      map: null,
      markers: []
    }
  },
  mounted() {
    this.map = this.$refs.map.$mapObject;
  },
  created() {
    const selectedHospital = JSON.parse(localStorage.getItem('selectedHospital'))
    this.currentLocation = {
      lat: parseFloat(selectedHospital.lat),
      lng: parseFloat(selectedHospital.long)
    };

    this.markers.push({
      position: this.currentLocation
    })
  }
}
</script>