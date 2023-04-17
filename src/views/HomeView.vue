<template>
  <div class="home">
    <div class="step">
      <div v-for="(item, index) in arr" :key="index">
        <div :class="{ before: index + 1 <= state }">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

interface StepItem {
  name: string;
}
onMounted(() => {});
let state: number = Math.ceil(Math.random() * 4);
const arr: StepItem[] = reactive([
  {
    name: "企业充值",
  },
  {
    name: "平台审核",
  },
  {
    name: "充值入账",
  },
  {
    name: "TEST",
  },
]);
</script>
<style scoped>
.step {
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 200px;
  margin: auto;
  background-color: red;
  align-items: center;
  color: #fe9425;
}
.before {
  color: #35c767;
}
</style>
