<template>
  <div id="app">
    <router-link to="test">test</router-link>
    <router-link to="Echarts">Echarts</router-link>
    <router-link to="testEcharts">testEcharts</router-link>
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
  margin-top: 60px;
}
</style>
