<template>
  <div class='devices' id="devices" :style="{ width:width, height:height, backgroundImage: url(config.imgConfig.computerRoomBottomMap)}" >
      <ul>
          <li>
              <div class="content">
              <p> 数据中心空调状态</p>
                    <img v-show="airConditioningStateOn" class="icon" :src=config.imgConfig.airConditioningStateOn alt="">
                    <img v-show="airConditioningStateOff" class="icon" :src=config.imgConfig.airConditioningStateOff alt="">
                    <span class="text">{{value[0]}}</span>
              </div>
          </li>
          <li class="none"></li>
          <li class="none"></li>
           <li>
              <div class="content">
              <p> 数据中心空调设定温度</p>
                    <img class="icon" :src="config.imgConfig.settingTemperature" alt="">
                    <span class="text">{{value[1]}}</span>
              </div>
          </li>
           <li>
              <div class="content">
              <p> 数据中心空调设定湿度</p>
                    <img class="icon" :src="config.imgConfig.settingTemperature" alt="">
                    <span class="text">{{value[2]}}</span>
              </div>
          </li>
          <li class="none"></li>
          <li class="none"></li>
           <li>
             <div class="content">
              <p> 数据中心空调回风湿度</p>
                    <img class="icon" :src="config.imgConfig.returnAirHumidity" alt="">
                    <span class="text">{{value[3]}}</span>
              </div>
          </li>
           <li>
              <div class="content">
              <p>数据中心实际温度</p>
                    <img class="icon" :src="config.imgConfig.actualTemperature" alt="">
                    <span class="text">{{value[4]}}</span>
              </div>
          </li>
           <li class="none"></li>
          <li class="none"></li>

           <li>
             <div class="content">
              <p> 数据中心实际湿度</p>
                    <img class="icon" :src="config.imgConfig.actualHumidity" alt="">
                    <span class="text">{{value[5]}}</span>
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
            // maxWidth:'480px',
            value: [],
            name: [],
            // 空调开关状态
            statusOn: false,
            statusOff: true
        }
    },
    mounted () {
        this.getaxios()
        setInterval(this.getaxios, 900000) // 15min轮询
    },
    methods: {
        getaxios () {
            const that = this
            // 清空数组
            that.name.splice(0, that.name.length)
            that.value.splice(0, that.value.length)
            this.$axios.get('/yuanquguanli')
                .then(function (response) {
                    console.log('接收成功！', response)
                    console.log('1', response.data.data)
                    for (var i = 0; i < response.data.data.length; i++) {
                        that.name.push(response.data.data[i].name) // 循环对象的name
                        that.value.push(response.data.data[i].value) // 循环对象的value
                    }
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
.devices{
    width: 100%;
    height: 100%;
  background-repeat: no-repeat;
  background-position: center;
 
  /* background:rgba(211, 160, 160, 0.3);     */
}
ul{
    height: 100%;
    overflow: hidden;
}
ul li{
    list-style: none;
    float: left;
    width: 50%;
    height: 17.3%;
    background-color: #ffffff40;
}
li p{
    text-align: left;
    font-size: 14px;
    text-indent:3px;
    color: #ffffff;
}
li div{
    width: 100%;
    height: 78%;
    border: 1px solid rgb(255, 255, 255);
}

img.icon{
    width: 30px;
    height: 30px;
    vertical-align: sub;
    margin-top: 10px;
}
span.text{
    vertical-align: super;
    font-size: 16px;
    margin-left: 10px;
    color: #ffffff;
}
</style>
