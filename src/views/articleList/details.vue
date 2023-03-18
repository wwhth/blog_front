<template>
	<div>
		<div class="list">
		<div class="viewport" ref="viewport" @scroll="onScroll">
		<div class="scrollbar" ref="scrollbar">
		</div>
		<div class="vslist" ref="vslist" >
		<div class="row" v-for="(item,i) in dataList" >
			{{ item }}
		</div> 
		</div>

		</div>
	</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted ,computed,ref} from 'vue';
const dataList=computed(()=>{
	return vsList.slice(start.value,end.value)
})
let start= ref(0)
let end = ref(30)
let vslist = ref()
let viewport =ref()
let scrollbar=ref()
const rowSize =ref(20)
let rowHeight=ref(30)
let rowHeightPx=rowHeight.value+'px'
onMounted(() => {
	vslist.value.style.height=viewport.value.style.height=rowSize.value*rowHeight.value+'px'
	scrollbar.value.style.height=rowHeight.value*vsList.length+'px'
	end.value=rowSize.value+start.value
	console.log(rowHeight.value*vsList.length,'=====')
})
const vsList=Object.freeze(new Array(20000).fill(null).map((item,index)=>{return  index+1}))
console.log(vsList)
const onScroll=()=>{
	let offset =viewport.value.scrollTop
	let scrollCount =Math.round(offset/rowHeight.value)
	console.log(viewport.value.style)
	start.value=scrollCount
	end.value=start.value+rowSize.value
	vslist.value.style.transform=`translateY(${offset}px)`
}
</script>

<style scoped>
.viewport{
	width: 400px;
	/* height: 400px; */
	overflow-y: scroll;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	background: yellowgreen;
}

.vslist{
	position: absolute;
	top: 0;
	left: 0;
}
.row{
	line-height: v-bind(rowHeightPx);
}
</style>