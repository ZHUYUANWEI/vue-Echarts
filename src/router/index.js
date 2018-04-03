import Vue from 'vue'
import Router from 'vue-router'
import Echarts from '@/components/Echarts/Echarts'
import testEcharts from '@/components/testEcharts/testEcharts'
import test from '@/components/test/test'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/Echarts',
            name: 'Echarts',
            component: Echarts
        },
        {
            path: '/testEcharts',
            name: 'testEcharts',
            component: testEcharts
        },
        {
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})
