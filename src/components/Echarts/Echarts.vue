<template>
  <div>
    <h4>客房管理——房型成交金额分析</h4>假数据
    <div class="box"><KefangEcharts4 :heightDiv="heightDivLine"></KefangEcharts4></div>
    <h4>客房管理——房型统计</h4>假数据
    <div class="box"><KefangEcharts3 :heightDiv="heightDivLine"></KefangEcharts3></div>
    <h4>客房管理——每日订单数统计</h4>假数据
    <div class="box"><KefangEcharts2 :heightDiv="heightDivLine"></KefangEcharts2></div>
    <h4>客房管理——每日订单数金额统计</h4>假数据
    <div class="box"><KefangEcharts1 :heightDiv="heightDivLine"></KefangEcharts1></div>

    <!-- <h4>社区数据——已注册用户分布</h4>假数据
    <div class="box"><ShequEcharts7 :heightDiv="heightDivLine"></ShequEcharts7></div>
    <h4>社区数据——工单分布</h4>假数据
    <div class="box"><ShequEcharts6 :heightDiv="heightDivLine"></ShequEcharts6></div>
    <h4>社区数据——意见分布</h4>假数据
    <div class="box"><ShequEcharts5 :heightDiv="heightDivLine"></ShequEcharts5></div>
    <h4>社区数据——业主总数</h4>假数据
    <div class="box"><ShequEcharts4 :heightDiv="heightDivLine"></ShequEcharts4></div>
    <h4>社区数据——意见</h4>假数据
    <div class="box"><ShequEcharts3 :heightDiv="heightDivLine"></ShequEcharts3></div>
    <h4>社区数据——工单</h4>假数据
    <div class="box"><ShequEcharts2 :heightDiv="heightDivLine"></ShequEcharts2></div>
    <h4>社区数据——物业收费项目</h4>假数据
    <div class="box"><ShequEcharts1 :heightDiv="heightDivLine"></ShequEcharts1></div> -->

    <!-- <h4>管理看板——资产收益图</h4>假数据
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
    <div class="box"><HomeEcharts2 :heightDiv="heightDivLine"></HomeEcharts2></div> -->
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

import ShequEcharts1 from './component/ShequEcharts1'
import ShequEcharts2 from './component/ShequEcharts2'
import ShequEcharts3 from './component/ShequEcharts3'
import ShequEcharts4 from './component/ShequEcharts4'
import ShequEcharts5 from './component/ShequEcharts5'
import ShequEcharts6 from './component/ShequEcharts6'
import ShequEcharts7 from './component/ShequEcharts7'

import KefangEcharts1 from './component/KefangEcharts1'
import KefangEcharts2 from './component/KefangEcharts2'
import KefangEcharts3 from './component/KefangEcharts3'
import KefangEcharts4 from './component/KefangEcharts4'

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
        KanbanEcharts4,
        ShequEcharts1,
        ShequEcharts2,
        ShequEcharts3,
        ShequEcharts4,
        ShequEcharts5,
        ShequEcharts6,
        ShequEcharts7,
        KefangEcharts1,
        KefangEcharts2,
        KefangEcharts3,
        KefangEcharts4
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
