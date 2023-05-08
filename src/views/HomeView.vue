<template>
  <div class="home">
    <div class="test">
      <div
        class="bg"
        :style="{ background: switch1 ? '#409eff' : '#f5f5f5' }"
        @click="switchTap"
      >
        <div v-if="!switch1" class="close"></div>
        <div v-else class="open"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// localStorage.setItem("switch1", "false");
// const localSwitch = Boolean(localStorage.getItem("switch1"));
// 设置默认的选项
// let switch1 = ref<boolean>(localSwitch);
let switch1 = ref<boolean>(false);
// 点击方法
const switchTap = (): void => {
  switch1.value = !switch1.value;
  // localStorage.setItem("swicth1", switch1.value + "");
};
</script>
<style scoped lang="scss">
.bg {
  width: 80px;
  height: 30px;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  .close {
    width: 26px;
    height: 26px;
    background-color: #ffffff;
    border-radius: 50%;
    margin-left: 2px;
  }
  .open {
    width: 26px;
    height: 26px;
    background-color: #ffffff;
    border-radius: 50%;
    position: absolute;
    right: 0;
    margin-right: 2px;
  }
}
</style>
