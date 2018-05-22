<template>
  <!-- <div class='devices' id="devices"  > -->
      <ul style="width: 100%; height: 100%; padding: 0px; margin: 0px">
          <li>
                <p> 园区人流量峰值时间</p>
                <div>
                <img class="icon" :src="peakTime" alt="">
                <span class="text">{{peakCountTime}}</span>
                </div>
          </li>
      </ul>
  <!-- </div> -->
</template>

<script>
import config from './../common/config/config.js'
export default {
    data () {
        return {
            peakCountTime: '10:00', // 园区峰值时间
            peakTime: config.imgConfig.peakTime
        }
    },
    mounted () {
        // this.getaxios()
        // setInterval(this.getaxios, 900000) // 15min轮询
    },
    methods: {
        getaxios () {
            const that = this
            this.$axios.get('/showData/ruckus/statistics')
                .then(function (response) {
                    console.log('接收成功！', response)
                    console.log('接收成功！', response.data.peakCountTime)
                    that.peakCountTime = response.data.peakCountTime
                    console.log(that.peakCountTime)
                })
                .catch(function (error) {
                    console.log('错误', error)
                })
        }
    }
}
</script>
<style>
/* body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
} */
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
    width: 100%;
    height: 100%;
    border: 1px solid rgb(167, 165, 165);
}
li p{
    text-align: left;
    font-size: 14px;
    text-indent:3px;
}
img.icon{
    width: 26px;
    height: 26px;
    vertical-align: sub;
}
span.text{
    vertical-align: super;
    font-size: 16px;
}
</style>
