<template>
    <div class='devices' id="devices" :style="{ width:width, height:height, backgroundImage: computerRoomBottomMapUrl}">
        <ul>
            <li>
                <div class="content">
                    <p> 数据中心空调状态</p>
                    <img v-show="statusOn" class="icon" :src=airConditioningStateOnUrl alt="">
                    <img v-show="statusOff" class="icon" :src=airConditioningStateOffUrl alt="">
                    <span class="text">{{airConStatus}}</span>
                </div>
            </li>
            <li class="none">
                <div class="content"></div>
            </li>
            <li class="none">
                <div class="content"></div>
            </li>
            <li>
                <div class="content">
                    <p> 数据中心空调设定温度</p>
                    <img class="icon" :src="settingTemperatureUrl" alt="">
                    <span class="text">{{airConTemperature}}</span>
                </div>
            </li>
            <li>
                <div class="content">
                    <p> 数据中心空调设定湿度</p>
                    <img class="icon" :src="settingHumidityUrl" alt="">
                    <span class="text">{{airConHumidity}}</span>
                </div>
            </li>
            <li class="none">
                <div class="content"></div>
            </li>
            <li class="none">
                <div class="content"></div>
            </li>
            <li>
                <div class="content">
                    <p> 数据中心空调回风湿度</p>
                    <img class="icon" :src="returnAirHumidityUrl" alt="">
                    <span class="text">{{airConReHumidity}}</span>
                </div>
            </li>
            <li>
                <div class="content">
                    <p>数据中心实际温度</p>
                    <img class="icon" :src="actualTemperatureUrl" alt="">
                    <span class="text">{{actualTemperature}}</span>
                </div>
            </li>
            <li class="none">
                <div class="content"></div>
            </li>
            <li class="none">
                <div class="content"></div>
            </li>

            <li>
                <div class="content">
                    <p> 数据中心实际湿度</p>
                    <img class="icon" :src="actualHumidityUrl" alt="">
                    <span class="text">{{actualHumidity}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import config from './../common/config/config.js';
    export default {
        data () {
            return {
                width: '480px',
                height: '540px',
                // 空调开关状态
                statusOn: true,
                statusOff: false,
                computerRoomBottomMapUrl: '',
                airConditioningStateOnUrl: '',
                airConditioningStateOffUrl: '',
                settingTemperatureUrl: '',
                settingHumidityUrl: '',
                returnAirHumidityUrl: '',
                actualTemperatureUrl: '',
                actualHumidityUrl: '',
                airConStatus: '',
                airConHumidity: '',
                airConTemperature: '',
                airConReHumidity: '',
                actualTemperature: '',
                actualHumidity: ''
            }
    },
        mounted () {
            this.computerRoomBottomMapUrl =
                'url(' + config.imgConfig.computerRoomBottomMap + ')';
            this.airConditioningStateOnUrl = config.imgConfig.airConditioningStateOn
        this.airConditioningStateOffUrl = config.imgConfig.airConditioningStateOff
        this.settingTemperatureUrl = config.imgConfig.settingTemperature
        this.settingHumidityUrl = config.imgConfig.settingHumidity
        this.returnAirHumidityUrl = config.imgConfig.returnAirHumidity
        this.actualTemperatureUrl = config.imgConfig.actualTemperature
        this.actualHumidityUrl = config.imgConfig.actualHumidity
        this.getaxios()
            setInterval(this.getaxios, 900000) // 15min轮询
        },
        methods: {
            getaxios () {
                const that = this
                this.$axios.get('/siteData/airConData ')
                    .then(function (response) {
                        console.log('接收成功！', response)
                        let data = response.data.data[0]
                        that.airConStatus = data.airConStatus
                        if (data.airConStatus == '关') {
                            that.statusOn = false
                            that.statusOff = true
                        } else if (data.airConStatus == '开') {
                            that.statusOn = true
                            that.statusOff = false
                        } else {
                            that.statusOn = false
                            that.statusOff = false
                            that.airConStatus = ''
                            console.error('数据中心空调状态读取错误：不是“开”/“关”')
                        }
                        that.airConHumidity = data.airConHumidity
                        that.airConTemperature = data.airConTemperature
                        that.airConReHumidity = data.airConReHumidity
                        that.actualTemperature = data.actualTemperature
                        that.actualHumidity = data.actualHumidity
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

    .devices {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    ul {
        height: 100%;
        overflow: hidden;
        -webkit-margin-before: 0px;
        -webkit-margin-after: 0px;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        -webkit-padding-start: 0px;
    }

    ul li {
        list-style: none;
        float: left;
        width: 50%;
        height: 90px;
        background-color: #ffffff40;
    }

    li p {
        text-align: left;
        font-size: 14px;
        text-indent: 3px;
        color: #ffffff;
        -webkit-margin-before: 0px;
        -webkit-margin-after: 0px;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
    }

    li div {
        width: 100%;
        height: 88px;
        border: 1px solid rgb(255, 255, 255);
    }

    img.icon {
        width: 30px;
        height: 30px;
        vertical-align: sub;
        margin-top: 10px;
    }

    span.text {
        vertical-align: super;
        font-size: 16px;
        margin-left: 10px;
        color: #ffffff;
    }
</style>
