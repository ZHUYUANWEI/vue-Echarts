<template>
  <div>
    <div class="TestEcharts1"><TestEcharts1></TestEcharts1></div>
    <div class="TestEcharts2"><TestEcharts2 :heightDiv="heightDiv1"></TestEcharts2></div>
    <div class="TestEcharts3"><TestEcharts3 :heightDiv="heightDiv2"></TestEcharts3></div>
    <button @click="clickButton">点击</button>
  </div>
</template>

<script>
import TestEcharts1 from './component/testEcharts1'
import TestEcharts2 from './component/testEcharts2'
import TestEcharts3 from './component/TestEcharts3'

export default {
    name: 'testEcharts',
    data () {
        return {
            heightDiv1: '400',
            heightDiv2: '400'
        }
    },
    mounted () {},
    methods: {
        clickButton () {
            this.heightDiv1 = 200
            this.heightDiv2 = 200
        }
    },
    components: {
        TestEcharts1,
        TestEcharts2,
        TestEcharts3
    }
}
</script>

<style>
.TestEcharts1 {
  width: 40%;
}
.TestEcharts2 {
  width: 100%;
}
.TestEcharts3 {
  width: 100%;
}
</style>
