<template>
	<div>
    <div @click="go2Details()">list 获取id通过$router跳转</div>
	<div>
	<routerView/>
	</div>
	</div>
</template>

<script setup lang='ts'>
import {useRouter} from 'vue-router'
const router=useRouter()
	const go2Details=()=>{
		router.push({
			path:'/articleList/details',
			// name:'Details',
			query:{
				id:1
			}
		})
	}
</script>
