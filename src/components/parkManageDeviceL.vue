<template>
<div class='parkManageDeviceL' :style="{backgroundImage: 'url(' + computerRoomBottomMap + ')'}" >
    <ul>
        <li>
            <div class="title">数据中心空调状态</div>
            <div class="peopleBox">
                <img class="icon" :src="airConStatusImg" alt="">
                <span>{{airConStatus}}</span>
            </div>
        </li>
        <li>
            <div class="title">数据中心空调设定温度</div>
            <div class="peopleBox">
                <img class="icon" :src="airConTemperatureImg" alt="">
                <span>{{airConTemperature}}</span>
            </div>
        </li>
        <li>
            <div class="title">数据中心空调设定湿度</div>
            <div class="peopleBox">
                <img class="icon" :src="airConHumidityImg" alt="">
                <span>{{airConHumidity}}</span>
            </div>
        </li>
        <li>
            <div class="title">数据中心空调回风湿度</div>
            <div class="peopleBox">
                <img class="icon" :src="airConReHumidityImg" alt="">
                <span>{{airConReHumidity}}</span>
            </div>
        </li>
        <li>
            <div class="title">数据中心实际温度</div>
            <div class="peopleBox">
                <img class="icon" :src="actualTemperatureImg" alt="">
                <span>{{actualTemperature}}</span>
            </div>
        </li>
        <li>
            <div class="title">数据中心实际湿度</div>
            <div class="peopleBox">
                <img class="icon" :src="actualHumidityImg" alt="">
                <span>{{actualHumidity}}</span>
            </div>
        </li>
        <div style="clear: both;"></div>
    </ul>
</div>
</template>

<script>
import config from './../common/config/config.js'
export default {
    data () {
        return {
            computerRoomBottomMap: config.imgConfig.computerRoomBottomMap,
            airConStatusImg: config.imgConfig.airConditioningState,
            airConTemperatureImg: config.imgConfig.settingTemperature,
            airConHumidityImg: config.imgConfig.settingHumidity,
            airConReHumidityImg: config.imgConfig.returnAirHumidity,
            actualTemperatureImg: config.imgConfig.actualTemperature,
            actualHumidityImg: config.imgConfig.actualHumidity,

            airConStatus: '关',
            airConTemperature: '0℃',
            airConHumidity: '0%',
            airConReHumidity: '0%',
            actualTemperature: '0℃',
            actualHumidity: '0%'
        }
    },
    mounted () {
        this.getaxios()
        setInterval(this.getaxios, 900000) // 15min轮询
    },
    methods: {
        getaxios () {
            this.$axios.get(config.apiConfig.getEnvironmentState)
                .then(res => {
                    console.log('成功——数据中心环境状况', res)
                    this.airConStatus = res.data.data[0].airConStatus
                    this.airConTemperature = res.data.data[0].airConTemperature
                    this.airConHumidity = res.data.data[0].airConHumidity
                    this.airConReHumidity = res.data.data[0].airConStatus
                    this.actualTemperature = res.data.data[0].actualTemperature
                    this.actualHumidity = res.data.data[0].actualHumidity
                })
                .catch(err => {
                    console.log('失败——数据中心环境状况', err)
                })
        }
    }
}
</script>
<style>
.parkManageDeviceL{
    width: 100%;
    height: 100%;
    color: #fff;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.parkManageDeviceL ul{
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
}
.parkManageDeviceL ul li{
    list-style: none;
    width: 50%;
    height: 16.66%;
    border: 1px solid rgb(167, 165, 165);
    align-items: stretch;
    box-sizing: border-box;
}

.parkManageDeviceL ul li:nth-child(2n-1){
    margin-right: 1px;
    float: left;
}

.parkManageDeviceL ul li:nth-child(2n){
    margin-left: 1px;
    float: right;
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
