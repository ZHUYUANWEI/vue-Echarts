<template>
  <div>

    <h4>管理看板——资产收益图</h4>假数据
    <div class="box"><KanbanEcharts4 :heightDiv="heightDivLine"></KanbanEcharts4></div>
    <h4>管理看板——每月成交企业数</h4>
    <div class="box"><KanbanEcharts3 :heightDiv="heightDivLine"></KanbanEcharts3></div>
    <h4>管理看板——入驻行业分析</h4>
    <div class="box"><KanbanEcharts2 :heightDiv="heightDivPie"></KanbanEcharts2></div>
    <h4>管理看板——招商客户分析</h4>
    <div class="box"><KanbanEcharts1 :heightDiv="heightDivPie"></KanbanEcharts1></div>

    <h4>首页——今日入园人流趋势</h4>假数据
    <div class="box"><HomeEcharts1 :heightDiv="heightDivLine"></HomeEcharts1></div>
    <h4>首页——今日入园车辆趋势</h4>假数据
    <div class="box"><HomeEcharts2 :heightDiv="heightDivLine"></HomeEcharts2></div>
    <!-- <button @click="clickButton">点击</button> -->
  </div>
</template>

<script>
import HomeEcharts1 from './component/HomeEcharts1'
import HomeEcharts2 from './component/HomeEcharts2'
import KanbanEcharts1 from './component/KanbanEcharts1'
import KanbanEcharts2 from './component/KanbanEcharts2'
import KanbanEcharts3 from './component/KanbanEcharts3'
import KanbanEcharts4 from './component/KanbanEcharts4'

export default {
    name: 'testEcharts',
    data () {
        return {
            heightDivLine: '300',
            heightDivPie: '400'
        }
    },
    mounted () {},
    methods: {
        clickButton () {
            this.heightDivLine = 200
            this.heightDivPie = 200
        }
    },
    components: {
        HomeEcharts1,
        HomeEcharts2,
        KanbanEcharts1,
        KanbanEcharts2,
        KanbanEcharts3,
        KanbanEcharts4
    }
}
</script>

<style>
.box{
    width: 90%;
    border: 1px red solid;
    margin-bottom: 10px;
}
</style>
