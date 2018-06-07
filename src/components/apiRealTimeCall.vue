<template>
    <div style="display:flex; background:#797979;color:#fff;height: 100%;">
        <div class="box">
            <h3 class="boxh">当前服务状态</h3>
            <div class="boxTable">
                <table border="0">
                    <tr>
                        <th>服务</th>
                        <th>地址</th>
                        <th>状态</th>
                        <th>中断次数</th>
                    </tr>
                    <tr v-for="(item, index) in heartBeatStatus" :key="index">
                        <td>{{ item.serviceName }}</td>
                        <td>{{ item.serviceIp }}</td>
                        <td :style="{'color': item.serviceStatus === 0 ? '#19be6b' : '#ff9900'}">
                            <Icon type="cloud" size="20"></Icon>
                        </td>
                        <td>
                            失联
                            <span :style="{'color': item.disconnectTimes === 0 ? '#ffffff' : '#ff9900'}">{{ item.disconnectTimes }}</span>
                            次
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="box">
            <h3 class="boxh">API龟速榜（每个上榜API只体现其当天响应时间最长的一次）</h3>
            <div class="boxTable">
                <table border="0">
                    <tr>
                        <th>API</th>
                        <th>URI</th>
                        <th>请求时间</th>
                        <th>响应时间(ms)</th>
                    </tr>
                    <tr v-for="(item, index) in topSlowList" :key="index">
                        <td>{{ item.apiName }}</td>
                        <td>{{ item.apiServiceName }}</td>
                        <td>{{ item.requestTime }}</td>
                        <td>{{ item.responseTime }}</td>
                    </tr>
                </table>
            </div>
            <h4 class="boxh lastUpdateTime">数据最近一次更新时间：</h4>
        </div>

    </div>
</template>

<script>
import config from './../common/config/config.js'
export default {
    data () {
        return {
            heartBeatStatus: '',
            topSlowList: '',
            a: ''
        }
    },
    computed: {
    },
    mounted () {
        console.log(this)
        this.apiRealTimeCall()
        setInterval(this.apiRealTimeCall, 60000)
        // this.a = setInterval(this.apiRealTimeCall, 60000)
    },
    created () { },
    methods: {
        apiRealTimeCall () {
            this.$axios.get(config.apiConfig.apiRealTimeCall)
                .then(res => {
                    console.log('成功-API实时调用', res.data)
                    this.heartBeatStatus = res.data.heartBeatStatus
                    this.topSlowList = res.data.topSlowList
                    this.topSlowList.forEach((item, index, input) => {
                        this.topSlowList[index].requestTime = config.methodConfig.formatDate('hh:mm:ss', new Date(item.requestTime * 1000))
                    })
                })
                .catch(err => {
                    console.log('错误-API实时调用', err)
                    // clearInterval(this.a)
                })
        }
    }
}
</script>

<style scoped>
.box {
    width: 50%;
    margin: 10px;
    position: relative;
}
.boxh {
    position: absolute;
    width: 100%;
    background: #797979;
}
.lastUpdateTime{
    bottom: 0;
    text-align: right
}
.boxTable {
    height: 100%;
    overflow-y: auto;
    padding: 25px 0;
}
table {
    width: 100%;
    border-spacing: 0;
}
table,
table tr th,
table tr td {
    border: 1px solid #0094ff;
}
th {
    padding: 12px 0;
}
td {
    padding: 12px 0;
}
</style>
