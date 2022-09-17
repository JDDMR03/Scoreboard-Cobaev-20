<template>
  <center><h1>Scoreboards COBAEV 20 2022</h1></center>
  <br />
  <div class="row justify-content-center">
    <div class="col-auto">
      <button
        class="btn btn-primary"
        v-if="show_curso == false"
        v-on:click="show_curso = true"
      >
        Mostrar Scoreboard Curso
      </button>
    </div>
  </div>
  <br />
  <div class="row justify-content-center">
    <div class="col-auto">
      <button
        class="btn btn-primary"
        v-if="show_exam == false"
        v-on:click="show_exam = true"
      >
        Mostrar Scoreboard Examen
      </button>
    </div>
  </div>
  <br />
  <div class="row justify-content-center">
    <div class="col-auto" v-if="show_curso == true">
      <center><h1>Scoreboard COBAEV 20 Curso</h1></center>
      <scoreboard></scoreboard>
      <button
        class="btn btn-primary"
        v-if="show_curso == true"
        v-on:click="show_curso = false"
      >
        Ocultar Scoreboard Curso
      </button>
    </div>
  </div>
  <br />
  <br />
  <div class="row justify-content-center">
    <div class="col-auto" v-if="show_exam == true">
      <center><h1>Scoreboard COBAEV 20 Examen</h1></center>
      <score_exam></score_exam>
      <button
        class="btn btn-primary"
        v-if="show_exam == true"
        v-on:click="show_exam = false"
      >
        Ocultar Scoreboard Examen
      </button>
    </div>
  </div>
</template>

<script>
import scoreboard from "./components/Scoreboard.vue";
import score_exam from "./components/Scoreboard_Examenes.vue";

export default {
  name: "App",
  components: {
    scoreboard,
    score_exam,
  },
  data() {
    return {
      show_curso: false,
      show_exam: false,
    };
  },
  methods: {},
};
</script>

<style></style>
