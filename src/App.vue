<template>
  <h1>Scoreboards COBAEV 20</h1>
  <h2>Bienvenid@</h2>
  <div class="row">
    <div class="col-md-auto">
      <button
        class="btn btn-outline-primary"
        v-on:click="changeDir('basic-course')"
      >
        Curso Basico
      </button>
      <br />
      <br />
      <button class="btn btn-outline-primary" v-on:click="changeDir('exam')">
        Examen
      </button>
    </div>
    <div class="col-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeDir(ruta) {
      this.$router.push("/" + ruta);
    },
  },
};
</script>

<style>
h1 {
  color: #5e2129;
  text-decoration: underline;
  text-align: center;
}
h2 {
  color: #5e2129;
  text-align: center;
}
.btn-outline-primary {
  background-color: transparent;
  color: #5e2129;
  border-color: #5e2129;
}
.btn-outline-primary:hover {
  background-color: #5e2129 !important;
  color: white !important;
  border-color: #46181e !important;
}
</style>
