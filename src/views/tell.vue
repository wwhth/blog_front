<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import "../Widgets/widgets.css";
import * as Cesium from "cesium";
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkM2M3ODMwMS00YmI4LTRhZTEtYmQ3Ny1jZGM3NWJkN2FhODIiLCJpZCI6MTMyNDg3LCJpYXQiOjE2ODA3OTUyNDl9.2nLHLdICIZlpeaVTaaZ4DiTWQx8eXlhTrLaVc_787VQ";

// cesium默认资源路径
window.CESIUM_BASE_URL = "/public/Cesium";
let viewer: any = null;
const initViewer = () => {
  viewer = new Cesium.Viewer("cesium-init", {
    //         terrainProvider: new window.Cesium.CesiumTerrainProvider({
    //             url: 'https://tiles.geovis.online/base/v1/terrain?token=fd2cddddcf70866a1a334a47b78b8cba1941af00c93b3a97e49c65ab5182922a',
    //             requestWaterMask: true,
    //             requestVertexNormals: true
    //         }),
    //         imageryProvider: new window.Cesium.ArcGisMapServerImageryProvider({
    //             url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    //         }),
    sceneMode: Cesium.SceneMode.SCENE3D, //选择模型 2D 3D 哥伦布
    // vrButton: false,   //vr  默认就是false  点击会分屏
    animation: false, //左下角动画
    baseLayerPicker: false, //图层选择器
    // geocoder: false, //搜索框
    timeline: false, //时间线
    fullscreenButton: false, //全屏
    homeButton: false, //home
    creditContainer: document.createElement("div"), //版权信息  创建空的div，隐藏信息
    // infoBox: true,
    navigationHelpButton: false, //help
    sceneModePicker: false, //场景选择
    scene3DOnly: true, //仅显示3D
    //         skyBox: new window.Cesium.SkyBox({
    //             sources: {
    //                 positiveX: require('@/assets/images/tycho2t3_80_px.jpg'),
    //                 negativeX: require('@/assets/images/tycho2t3_80_mx.jpg'),
    //                 positiveY: require('@/assets/images/tycho2t3_80_py.jpg'),
    //                 negativeY: require('@/assets/images/tycho2t3_80_my.jpg'),
    //                 positiveZ: require('@/assets/images/tycho2t3_80_pz.jpg'),
    //                 negativeZ: require('@/assets/images/tycho2t3_80_mz.jpg'),
    //             }
    //         })
  });
};
onMounted(() => {
  initViewer();
});
</script>

<template>
  <div>
    <div id="cesium-init"></div>
  </div>
</template>

<style scoped>
#cesium-init {
  height: 100vh;
  width: 100vw;
}
</style>
