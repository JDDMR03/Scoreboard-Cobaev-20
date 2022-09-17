<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Usuario</th>
        <th scope="col">Entrada-Salida</th>
        <th scope="col">Condicionales</th>
        <th scope="col">Operaciones-Basicas</th>
        <th scope="col">Ciclos</th>
        <th scope="col">Arreglos</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="score in scores">
        <th scope="row" v-if="score.id==1" class="table-success" >{{score.id}}</th>
        <td v-if="score.id==1" class="table-success" align="center">{{score.nombre}}</td>
        <td v-if="score.id==1" class="table-success" align="center">{{score.usuario}}</td>
        <td v-if="score.id==1" class="table-success" align="center">{{score.Entrada_Salida}}</td>
        <td v-if="score.id==1" class="table-success" align="center">{{score.Condicionales}}</td>
        <td v-if="score.id==1" class="table-success" align="center">{{score.Operaciones_Basicas}}</td>
        <td v-if="score.id==1" class="table-success" align="center">{{score.Ciclos}}</td>
        <td v-if="score.id==1" class="table-success" align="center">{{score.Arreglos}}</td>
        <td v-if="score.id==1" class="table-success" align="center">{{score.Total}}</td>
      </tr>
      <tr v-for="score in scores">
        <th scope="row" v-if="score.id!=1">{{score.id}}</th>
        <td v-if="score.id!=1" align="center">{{score.nombre}}</td>
        <td v-if="score.id!=1" align="center">{{score.usuario}}</td>
        <td v-if="score.id!=1" align="center">{{score.Entrada_Salida}}</td>
        <td v-if="score.id!=1" align="center">{{score.Condicionales}}</td>
        <td v-if="score.id!=1" align="center">{{score.Operaciones_Basicas}}</td>
        <td v-if="score.id!=1" align="center">{{score.Ciclos}}</td>
        <td v-if="score.id!=1" align="center">{{score.Arreglos}}</td>
        <td v-if="score.id!=1" align="center">{{score.Total}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import scoress from "/home/juan/Documentos/Programacion/Vue/Scoreboard-Seleccion-COBAEV20/src/assets/scores.json";
export default {
  name: 'Scoreboard',
  computed: {
    scores(){
      return scoress.map((score) => {
        return score;
      })
    }
  },
};
</script>

<style></style>
