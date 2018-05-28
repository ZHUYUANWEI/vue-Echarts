<template>
  <div class='parkManageDeviceC'>
      <ul>
            <li>
                <div class="title">本月人流量</div>
                <div class="peopleBox">
                    <img class="icon" :src="visitorsFlowrate" alt="">
                    <span>{{monthlyCount}}</span>
                </div>
            </li>
            <li>
                <div class="title">本周人流量</div>
                <div class="peopleBox">
                    <img class="icon" :src="visitorsFlowrate" alt="">
                    <span>{{weeklyCount}}</span>
                </div>
            </li>
            <li>
                <div class="title">本日人流量</div>
                <div class="peopleBox">
                    <img class="icon" :src="visitorsFlowrate" alt="">
                    <span>{{dailyCount}}</span>
                </div>
            </li>
            <li>
                <div class="title">本日人流量峰值</div>
                <div class="peopleBox">
                    <img class="icon" :src="visitorsFlowrate" alt="">
                    <span>{{peakCount}}</span>
                </div>
            </li>
      </ul>
  </div>
</template>

<script>
import config from './../common/config/config.js'
export default {
    data () {
        return {
            visitorsFlowrate: config.imgConfig.visitorsFlowrate,
            monthlyCount: '0', // 本月人流量
            weeklyCount: '0', // 本周人流量
            dailyCount: '0', // 本日人流量
            peakCount: '0' // 本日人流量峰值
        }
    },
    mounted () {
        this.getaxios()
        setInterval(this.getaxios, 900000) // 15min轮询
    },
    methods: {
        getaxios () {
            this.$axios.get(config.apiConfig.getPeopleNumber)
                .then(res => {
                    console.log('成功——人流量', res)
                    this.monthlyCount = res.data.data[0].monthlyCount
                    this.weeklyCount = res.data.data[0].weeklyCount
                    this.dailyCount = res.data.data[0].dailyCount
                    this.peakCount = res.data.data[0].peakCount
                })
                .catch(err => {
                    console.log('失败——人流量', err)
                })
        }
    }
}
</script>
<style>
.parkManageDeviceC{
    width: 100%;
    height: 100%;
    color: #fff;
}

.parkManageDeviceC ul{
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
}
.parkManageDeviceC ul li{
    list-style: none;
    width: 100%;
    height: 25%;
    border: 1px solid rgb(167, 165, 165);
}

.title{
    text-align: left;
    margin: 5px 10px;
}

.peopleBox{
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 0 10px 10px;
}

.peopleBox .icon{
    width: 30px;
    height: 30px;
}

.peopleBox span{
    display: inline-block;
    margin-left: 15px;
}

</style>
