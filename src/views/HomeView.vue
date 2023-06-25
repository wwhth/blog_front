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
    <!-- <input type="text" value="{= name =}" @change="changeName" /> -->
    <input type="text" v-model="name" @change="changeName" />
    <span @click="changAge">{{ age }}</span>
    {{ axiuluo }}
    <svg width="1200" height="1200">
      <circle cx="200" cy="200" r="200" fill="red" stroke="blue"></circle>
    </svg>
  </div>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
const currentThis = getCurrentInstance();
console.log(currentThis);
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
let name = ref<String>("");
let age = ref<Number>(18);
const changAge = (): void => {
  age.value = 23;
};
let axiuluo = "阿修罗";
const changeName = (): void => {
  console.log(name.value, "name");
};
</script>
<style scoped lang="scss">
@mixin center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@mixin wh($w: 26, $h: 26) {
  width: $w + px;
  height: $h + px;
}
.bg {
  // width: 80px;
  // height: 30px;
  @include wh(80, 30);
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  .close {
    // width: 26px;
    // height: 26px;
    @include wh();
    background-color: #ffffff;
    border-radius: 50%;
    margin-left: 2px;
    // @include center;
  }
  .open {
    // width: 26px;
    // height: 26px;
    @include wh();
    background-color: #ffffff;
    border-radius: 50%;
    position: absolute;
    right: 0;
    margin-right: 2px;
  }
}
</style>
