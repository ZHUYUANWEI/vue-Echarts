<template>
  <div class='devices' id="devices" :style="{ width:width,height:height, maxWidth:maxWidth}" >
      <ul>
          <li>
              <div class="content">
                    <p> 本月人流量</p>
                    <img class="icon" :src="config.imgConfig.visitorsFlowrate" alt="">
                    <span class="text">{{monthlyCount}}</span>
              </div>
          </li>
          <li>
              <div class="content">
                    <p> 本周人流量</p>
                    <img class="icon" :src="config.imgConfig.visitorsFlowrate" alt="">
                    <span class="text">{{weeklyCount}}</span>
              </div>
          </li>
          <li>
              <div class="content">
                    <p> 本日人流量</p>
                    <img class="icon" :src="config.imgConfig.visitorsFlowrate" alt="">
                    <span class="text">{{dailyCount}}</span>
              </div>
          </li>
          <li>
              <div class="content">
                    <p> 本日人流量峰值</p>
                    <img class="icon" :src="config.imgConfig.visitorsFlowrate" alt="">
                    <span class="text">{{peakCount}}</span>
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
            width: '100%',
            height: '100%',
            // maxWidth:'240px',
            // maxHeight:'480px',
            dailyCount: 0, // 园区日流量
            monthlyCount: 0, // 园区月流量
            peakCount: 0, // 园区峰值
            peakCountTime: '00:00', // 园区峰值时间
            weeklyCount: 0 // 园区周流量
        }
    },
    mounted () {
        this.getaxios()
        setInterval(this.getaxios, 900000) // 15min轮询
    },
    methods: {
        getaxios () {
            this.$axios.get('/showData/ruckus/statistics')
                .then(function (response) {
                    console.log('接收成功！', response)
                    this.dailyCount = response.data.dailyCount
                    this.monthlyCount = response.data.monthlyCount
                    this.peakCount = response.data.peakCount
                    this.weeklyCount = response.data.weeklyCount
                })
                .catch(function (error) {
                    console.log('错误', error)
                })
        }
    }
}
</script>
<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  font-family: sans-serif;
}
/* .devices{
  background:url(../assets/bg.jpg) no-repeat;
  background-position: center;
  background:rgba(211, 160, 160, 0.3);
} */
ul{
    width: 100%;
    height: 100%;
}
ul li{
    list-style: none;
    /* float: left; */
    width: 100%;
    height: 25%;
}
li p{
    text-align: left;
    font-size: 16px;
    text-indent:3px;
}
li div{
    width: 100%;
    height: 100%;
    border: 1px solid rgb(167, 165, 165);
}

img.icon{
    width: 30px;
    height: 30px;
    vertical-align: sub;
    margin-top: 30px;
    margin-right: 2%;
}
span.text{
    vertical-align: super;
    font-size: 16px;
}

</style>
