<script setup lang="ts"></script>

<template>
  <div style="width: 100%; height: 100%">
    <div class="gg">
      <!-- <div v-for="item in 9" :key="item" :class="['box' + item]">{{ item }}</div> -->
    </div>
  </div>
</template>

<style scoped>
.gg {
  display: grid;
  /* background: red; */
  width: 300px;
  height: 400px;
  margin: 100px auto;
  /* grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(4, 100px); */
  grid-template-areas:
    "a  c"
    "d  f"
    "g  i";
  /* grid-gap: 10px; */
  grid-auto-flow: row;
  background-color: yellow;
  /* justify-items: center; */
  /* place-items: center;
  place-content: center; */
}
.gg > div {
  /* width: 100px;
  height: 100px; */
  background-color: aquamarine;
  border: 2px dashed red;
  /* place-self: center center; */
}
/* .box1 {
  grid-row: 1/3;
  grid-column: 2/4;
}
.box2 {
  grid-row: 4/5;
  grid-column: 2/4;
} */
</style>
