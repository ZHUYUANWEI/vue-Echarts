import Vue from 'vue'
import Router from 'vue-router'
import Echarts from '@/components/Echarts/Echarts'
import testEcharts from '@/components/testEcharts/testEcharts'
import test from '@/components/test/test'
import lora from '@/components/lora'
import parkAdmin from '@/components/parkAdmin'
// import parkManageDeviceL from '@/components/parkManageDeviceL'
// import parkManageDeviceC from '@/components/parkManageDeviceC'
import parkManageDeviceR from '@/components/parkManageDeviceR'

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
        },
        {
            path: '/lora',
            name: 'lora',
            component: lora
        },
        {
            path: '/parkAdmin',
            name: 'parkAdmin',
            component: parkAdmin
        },
        // {
        //     path: '/parkManageDeviceL',
        //     name: 'parkManageDeviceL',
        //     component: parkManageDeviceL
        // },
        // {
        //     path: '/parkManageDeviceC',
        //     name: 'parkManageDeviceC',
        //     component: parkManageDeviceC
        // },
        {
            path: '/parkManageDeviceR',
            name: 'parkManageDeviceR',
            component: parkManageDeviceR
        }
    ]
})
