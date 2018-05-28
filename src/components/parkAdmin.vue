<template>
<div class="parkAdmin" style="position: relative;">
    <div class="grad gradL"></div>
    <div id="heatmapContainerWrapper"  :style="{width: widthDiv ,height: heightDiv, backgroundImage: 'url(' + imgUrl + ')' }" ></div>
    <div class="grad gradR"></div>

    <!-- 天气预报 -->
    <div class="weatherForecast" style="position: absolute;top: 0;left:0;z-index:10" >
        <div class="weather">
            <div class="nowWeather">
                <div style="width:110px;height:110px;background: #000;">
                    <big class="png90" :class="weatherClass" :style="{backgroundImage: 'url(' + todayWeather + ')'}"></big>
                </div>
                <div>
                    <table style="height:110px">
                        <tr>
                            <th>{{weatherData.temperature}}</th>
                        </tr>
                        <tr>
                            <th>{{weatherText}}</th>
                        </tr>
                </table>
                </div>
            </div>
            <div class="weatherWarning">
                <div>
                    <div class="weatherWarningTL">
                        <img :src="weatherWarning" alt="" style="width:100%">
                    </div>
                    <div class="weatherWarningTR">天气预警</div>
                </div>
                <table>
                    <tr>
                        <th>风力</th>
                        <th>降雨量</th>
                        <th>空气质量</th>
                    </tr>
                    <tr>
                        <td>{{weatherData.windPower}}</td>
                        <td>{{weatherData.rainfallCapacity}}</td>
                        <td>{{weatherData.quality}}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="futureWeather">
            <table>
                <tr>
                    <td v-for="item in weatherData.forecast" :key="item.date">{{item.date}}</td>
                </tr>
                <tr>
                    <td v-for="item in weatherData.forecast" :key="item.date">
                        <big class="png40" :class="item.imageCss" :style="{backgroundImage: 'url(' + futureWeather + ')'}"></big>
                    </td>
                </tr>
                <tr>
                    <td v-for="item in weatherData.forecast" :key="item.date">{{item.weather}}</td>
                </tr>
                <tr>
                    <td v-for="item in weatherData.forecast" :key="item.date">{{item.quality}}</td>
                </tr>
                <tr>
                    <td v-for="item in weatherData.forecast" :key="item.date">{{item.temperature}}</td>
                </tr>
                <tr>
                    <td v-for="item in weatherData.forecast" :key="item.date">{{item.wind_direction}}</td>
                </tr>
                <tr>
                    <td v-for="item in weatherData.forecast" :key="item.date">{{item.wind_power}}</td>
                </tr>
            </table>
        </div>
        <div class="nowParameters">
            <table>
                <tr>
                    <th>湿度</th>
                    <th>气压</th>
                    <th>紫外线</th>
                    <th>降雨</th>
                    <th>PM2.5</th>
                </tr>
                <tr>
                    <td>{{weatherData.humidity}}</td>
                    <td>{{weatherData.airPressure}}</td>
                    <td>{{weatherData.ultraviolet}}</td>
                    <td>{{weatherData.rainfallCapacity}}</td>
                    <td>{{weatherData.pM25}}</td>
                </tr>
            </table>
        </div>
    </div>
 </div>
</template>

<script>
import config from './../common/config/config.js'
import Heatmap from 'heatmap.js'
require('./../common/css/weather.css')
export default {
    data () {
        return {
            imgUrl: config.imgConfig.peopleHeatMap,
            widthDiv: '100%', // 当前宽度（一直是100%）
            heightDiv: 'auto', // 当前高度（带px单位）

            maxWidth: '10000', // 坐标系x轴
            maxHeight: '7500', // 坐标系y轴

            widthChange: '', // 当前宽度（数字）
            heightChange: '', // 当前高度（数字）
            ratio: 1, // 宽高缩放比（当前宽高 / 坐标系宽高
            radius: 100, // 半径
            heatmapData: [],
            num: 0,

            weatherWarning: config.imgConfig.weatherWarning,
            todayWeather: config.imgConfig.todayWeather,
            futureWeather: config.imgConfig.futureWeather,
            weatherData: '',
            weatherClass: '',
            weatherText: ''

        }
    },
    mounted () {
        this.getaxios()
        this.getWeather()
        setInterval(this.getaxios, 300000)
        setInterval(this.getWeather, 3600000)

        const that = this
        // 页面缩放时进入该方法:监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
        window.onresize = function () {
            that.widthChange = document.getElementById('heatmapContainerWrapper').offsetWidth
            that.heightChange = that.widthChange * (that.maxHeight / that.maxWidth)
            that.heightDiv = that.heightChange + 'px'
            that.ratio = that.widthChange / that.maxWidth
            // 重新渲染热力图
            that.setDataChange()
        }
    },
    methods: {
        getaxios () {
            this.num++
            this.$axios.get(config.apiConfig.getHeatmapData)
                .then(res => {
                    // console.log('成功——人流热力图', res)
                    this.heatmapData = res.data.data.heatmapData
                    // 只有第一次初始化实例
                    if (this.num === 1) {
                        this.widthChange = document.getElementById('heatmapContainerWrapper').offsetWidth
                        this.heightChange = this.widthChange * (this.maxHeight / this.maxWidth)
                        this.heightDiv = this.heightChange + 'px'
                        this.ratio = this.widthChange / this.maxWidth
                        this.init()
                    }
                    this.setDataChange()
                })
                .catch(err => {
                    console.log('失败——人流热力图', err)
                })
        },

        // 初始化热图
        init () {
            // 创建热图实例
            this.heatmap = Heatmap.create({
                container: document.getElementById('heatmapContainerWrapper'), // 挂载
                radius: this.radius, // 点的半径大小
                opacity: 0.5
                // blur: 0.5
            })
        },

        // 使用数据集初始化（渲染）热图实例,setData从热图实例中删除所有以前存在的点并重新初始化数据存储。根据宽高比缩放比改变坐标与半径
        setDataChange () {
            let newPoints = []
            let max = 0
            for (let point of this.heatmapData) {
                max = Math.max(max, point.value)
                let newPoint = {
                    x: Math.round(point.x * this.ratio),
                    y: Math.round(point.y * this.ratio),
                    radius: Math.round(this.radius * this.ratio),
                    value: point.value
                }
                newPoints.push(newPoint)
            }
            let data = {
                min: 0,
                max: max,
                data: newPoints
            }
            // console.log('热力图坐标点', data)
            // 重置画布大小
            this.heatmap._renderer.setDimensions(this.widthChange, this.heightChange)
            // 使用数据集初始化
            this.heatmap.setData(data)
        },

        // 获取天气预报
        getWeather () {
            this.$axios.get(config.apiConfig.getWeather)
                .then(res => {
                    console.log('成功——获取天气预报', res.data)
                    this.weatherData = res.data
                    this.weatherClass = res.data.forecast[0].imageCss
                    this.weatherText = res.data.forecast[0].weather
                })
                .catch(err => {
                    console.log('失败——获取天气预报', err)
                })
        }
    }
}
</script>
<style>
.parkAdmin{
    background: #616D79;
    width:100%;
    display: flex;
    justify-content:space-between;
}

.grad{
    height: 1080px;
    width: 240px;
}

.gradL {
    background: -webkit-linear-gradient(left, #084065 , #616D79); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #084065 , #616D79); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #084065 , #616D79); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #084065 , #616D79); /* 标准的语法（必须放在最后） */
}

.gradR {
    background: -webkit-linear-gradient(left, #616D79 , #084065); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #616D79 , #084065); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #616D79 , #084065); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #616D79 , #084065); /* 标准的语法（必须放在最后） */
}

#heatmapContainerWrapper {
    width:1440px;
    background-repeat: no-repeat;
    background-size: 100% auto;
}

.weatherForecast{
    background-color: rgba(255, 255, 255, 0.5);
    width: 480px;
    /* height: 540px; */
}

.weather{
    display: flex;
    justify-content:space-between;
}

.weather .nowWeather{
    width: 50%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-right: 1px solid #000;
}

.weather .nowWeather > div{
    width: 50%;
}

.weather .weatherWarning{
    width: 50%;
    box-sizing: border-box;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    border-left: 1px solid #000;
    font-size: 0;
}

.weatherWarningTL{
    background: rgb(0, 0, 0);
    height: 55px;
    width: 55px;
    float: left;
    box-sizing: border-box;
    padding: 10px;
}

.weatherWarningTR{
    height: 55px;
    line-height: 55px;
    float: left;
    width: 163px;
    font-size: 22px;
}

.weatherWarning table{
    font-size: 12px;
    height: 55px;
}

.weatherWarning th,
.weatherWarning td
{
    width:33.33%;
    padding: 0;
}

.weather div{
    display: inline-block;
}

.futureWeather{
    padding: 10px;
    font-size: 12px;
    border-top: 2px solid #000
}

.futureWeather td{
    background-color: rgba(255, 255, 255, 0.9);
    width: 20%;
}

.nowParameters{
    padding: 10px;
}
.nowParameters th{
    width: 20%;
}
table{
    width: 100%;
    border-spacing: 2px;
}
th{
    background-color: rgba(255, 255, 255, 0.8);
    padding: 12px 0;
}
td{
    padding: 12px 0;
}

</style>
