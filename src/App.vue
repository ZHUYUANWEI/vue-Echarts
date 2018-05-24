<template>
  <div id="app">
    <router-link to="test" style="margin:0 10px">父子组件传值演示</router-link>
    <router-link to="Echarts" style="margin:0 10px">Echarts自定义组件</router-link>
    <router-link to="testEcharts" style="margin:0 10px">Echarts地图</router-link>
    <router-link to="lora" style="margin:0 10px">lora</router-link>
    <router-link to="parkManageDeviceL" style="margin:0 10px">parkManageDeviceL</router-link>
    <router-link to="parkManageDeviceC" style="margin:0 10px">parkManageDeviceC</router-link>
    <router-link to="parkManageDeviceR" style="margin:0 10px">parkManageDeviceR</router-link>
    <router-link to="parkAdmin" style="margin:0 10px">parkAdmin</router-link>
    <router-link to="getPoint" style="margin:0 10px">地图获取坐标点</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
        }
    },
    methods: {
    },
    components: {
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
