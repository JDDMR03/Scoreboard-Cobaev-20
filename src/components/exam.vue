<template>
  <div class="table-responsive">
    <table class="table table-borderless">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Usuario</th>
          <th scope="col">A</th>
          <th scope="col">B</th>
          <th scope="col">C</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="score in scores">
          <th scope="row" v-if="score.id == 1" class="table-success">
            {{ score.id }}
          </th>
          <td v-if="score.id == 1" class="table-success" align="center">
            {{ score.nombre }}
          </td>
          <td v-if="score.id == 1" class="table-success" align="center">
            {{ score.usuario }}
          </td>
          <td v-if="score.id == 1" class="table-success" align="center">
            {{ score.A }}
          </td>
          <td v-if="score.id == 1" class="table-success" align="center">
            {{ score.B }}
          </td>
          <td v-if="score.id == 1" class="table-success" align="center">
            {{ score.C }}
          </td>
          <td v-if="score.id == 1" class="table-success" align="center">
            {{ score.Total }}
          </td>
        </tr>
        <tr v-for="score in scores">
          <th scope="row" v-if="score.id != 1">{{ score.id }}</th>
          <td v-if="score.id != 1" align="center">{{ score.nombre }}</td>
          <td v-if="score.id != 1" align="center">{{ score.usuario }}</td>
          <td v-if="score.id != 1" align="center">{{ score.A }}</td>
          <td v-if="score.id != 1" align="center">{{ score.B }}</td>
          <td v-if="score.id != 1" align="center">{{ score.C }}</td>
          <td v-if="score.id != 1" align="center">{{ score.Total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import scoress from "/home/juan/Documentos/Programacion/vue/Scoreboard-Selection-COBAEV20/src/assets/scoreExam.json";
export default {
  name: "Scoreboard",
  computed: {
    scores() {
      return scoress.map((score) => {
        return score;
      });
    },
  },
};
</script>

<style></style>
