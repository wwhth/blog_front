<script setup lang="ts">
import { HeadersLists } from '@/utils/test';
import {RouterLink} from 'vue-router'
import {reactive} from 'vue'
const navLists = reactive(HeadersLists)
</script>

<template>
 <div class="bolg">
  <header>
   <nav>
   <h1>zyz</h1>
   <div class="nav" v-for="nav in navLists" :key="nav.name">
   
   <RouterLink :to="nav.url">{{ nav.name }}</RouterLink>
   </div>
   <div>搜索</div>
   </nav>
   </header>
  <main>
    <RouterView />
  </main>
  </div>
</template>

<style scoped>
.blog{
  display: flex;
}
header{
    height: 50px;
  }
  h1{
  font-size: 30px;
}
  nav{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .nav{
    display: flex;
    font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif
  }
  /* main{
    height: calc(100vh - 100px)
  } */
  
</style>
