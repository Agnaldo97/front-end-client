<template>
  <div class="home">
    <h1>Agora, descreva para nós em poucas palavras o ocorrido.</h1>
    <h2>{{time}}</h2>
    <div @click="startRecord()" class="microphone">
      <svg
        style="position: absolute; margin-top: 4px; margin-left: 0px;"
        v-if="!isRecording"
        width="119"
        height="119"
        viewBox="0 0 119 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g filter="url(#filter0_d)">
          <circle cx="59.5" cy="55.5" r="55.5" fill="white" />
          <rect x="19" y="22" width="81" height="81" fill="url(#pattern0)" />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="119"
            height="119"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0" transform="scale(0.00520833)" />
          </pattern>
          <image
            id="image0"
            width="192"
            height="192"
            xlink:href="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        style="position: absolute; margin-top: 0px; margin-left: 0px;"
        v-if="isRecording"
        width="111"
        height="111"
        viewBox="0 0 111 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="55.5" cy="55.5" r="55.5" fill="white" />
        <rect x="31" y="33" width="50" height="50" fill="#FF0000" />
      </svg>

      <svg
        class="microphone-ring"
        width="136"
        height="136"
        viewBox="0 0 136 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="68" cy="68" r="66.5" stroke="#DF8D2C" stroke-width="3" />
      </svg>
    </div>
    <Button
      style="position: fixed; bottom: 4vh;left: 22vw;"
      @click.native="goToNextPage()"
      text="Entendi"
    ></Button>
  </div>
</template>

<style>
.home {
  padding: 2em;
}
h1 {
  text-align: left;
  padding-top: 10%;
  padding-bottom: 10px;
}
h2 {
  color: #b4b4b4;
  font-size: 2.5em;
  margin-bottom: 80px;
}
.microphone {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.microphone svg.play-plause {
  position: absolute;
  margin-top: 4px;
  margin-left: -1px;
}
.microphone-ring {
  transition: transform 0.5s;
  transform: scale(1.1);
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@-moz-keyframes spin {
  from {
    -moz-transform: scale(1.1);
  }
  to {
    -moz-transform: scale(0.9);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: scale(1.1);
  }
  to {
    -webkit-transform: scale(0.9);
  }
}
@keyframes spin {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(0.9);
  }
}
</style>
<script>
import Button from "../../src/components/Button.vue";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      isRecording: false,
      recognition: new (window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition)(),
      description: "",
      newArray: [],
      timeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
      running: false,
      time: "00:00:00"
    };
  },
  components: {
    Button
  },
  created() {
    this.recognition.maxAlternatives = 10;
    this.recognition.interimResults = true;
    this.recognition.lang = "pt-BR";
    this.recognition.continuous = true;
    (this.recognition.onresult = event => {
      if (event.results.length > 0) {
        var result = event.results[0];
        for (var i = 0; i < result.length; ++i) {
          var text = result[i].transcript;
          this.newArray.push(text);
          this.description = this.newArray[this.newArray.length -1]
        }
      }
    })

  },
  methods: {
    goToNextPage() {
      this.$router.push("/screen-5");
      const patient = JSON.parse(localStorage.getItem("patient"));
      axios.put(
        `https://backend-hacking-rio.azurewebsites.net/api/private/attendance/infos/${patient.cpf}`,
        {
          description: this.description
        }
      );
    },
    startRecord() {
      if (!this.isRecording) {
        this.isRecording = true;
        this.recognition.start();
        this.start();
      } else {
        this.isRecording = false;
        this.recognition.abort();
        this.reset();
      }
    },
    clockrunning() {
      var currentTime = new Date(),
        timeElapsed = new Date(
          currentTime - this.timeBegan - this.stoppedDuration
        ),
        hour = timeElapsed.getUTCHours(),
        min = timeElapsed.getUTCMinutes(),
        sec = timeElapsed.getUTCSeconds();

      this.time =
        this.zeroPrefix(hour, 2) +
        ":" +
        this.zeroPrefix(min, 2) +
        ":" +
        this.zeroPrefix(sec, 2);
    },
    start() {
      if (this.running) return;

      if (this.timeBegan === null) {
        this.reset();
        this.timeBegan = new Date();
      }

      if (this.timeStopped !== null) {
        this.stoppedDuration += new Date() - this.timeStopped;
      }

      this.started = setInterval(this.clockrunning, 10);
      this.running = true;
    },
    reset() {
      this.running = false;
      clearInterval(this.started);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.time = "00:00:00";
    },
    zeroPrefix(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
    stop() {
      this.running = false;
      this.timeStopped = new Date();
      clearInterval(this.started);
    }
  }
};
</script>
