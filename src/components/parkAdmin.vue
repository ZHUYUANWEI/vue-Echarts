<template>
  <!-- 放平面图的盒子 -->
  <div id="heatmapContainerWrapper"  :style="{ width: width , height: heights , maxWidth: maxWidth+'px', maxHeight: maxHeight+'px', backgroundImage: 'url(' + imgUrl + ')' }" >
  </div>
</template>

<script>
import config from './../common/config/config.js'
import Heatmap from 'heatmap.js'
export default {
    data () {
        return {
            imgUrl: config.imgConfig.peopleHeatMap,
            width: '',
            height: '',
            maxWidth: '1024',
            maxHeight: '400',
            radiox: 1,
            radioy: 1,
            heights: '',
            radius: 50,
            firstdata: []
        }
    },
    mounted () {
        // 注意定时器里调用的方法不加()
        this.getaxios()
        setInterval(this.getaxios, 120000)
        this.init()
        this.calcWidthHeight()
        // 在mounted自定义的方法中，this的指向会被改变成调用该方法的对象,故将指代vue实例的this保存至const
        const that = this
        // 页面缩放时进入该方法:监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
        window.onresize = function () {
            // 获取宽度，计算高度
            that.calcWidthHeight()
            // 更改坐标大小 和 radius
            that.setDataChangeRadius(that.radiox, that.radioy)
        }
    },
    methods: {
    // 获取div盒宽，右宽高比设置div的高度
    // 计算缩放比
    // 重置canvas大小
        calcWidthHeight () {
            this.width = document.getElementById('heatmapContainerWrapper').offsetWidth
            this.height = this.width / (this.maxWidth / this.maxHeight)
            this.heights = this.width / (this.maxWidth / this.maxHeight) + 'px'
            // 计算宽高缩放比=获取当前宽/最大宽度
            this.radiox = this.width / this.maxWidth
            this.radioy = this.height / this.maxHeight
            // 页面加载时，计算当前(宽度/原图宽度)和(高度/原图高度)，即缩放比
            // 将缩放比作为传参，初始化热图，热图canvas挂载到未在页面加载时被重置大小的div盒子上，故canvas画布大小是默认div大小
            // 所以重置canvas大小
            this.heatmap._renderer.setDimensions(this.width, this.height)
        },
        // axios获取数据 axios成功后调用形参函数
        getaxios () {
            const that = this
            that.$axios.get('/ruckus-api/metrics/getRealTimeHeatmap')
                .then(function (response) {
                    console.log('接收成功！', response)
                    console.log(response.data.data.heatmapData)
                    // 获得的数据传给vue中的firstdata
                    that.firstdata = response.data.data.heatmapData
                    console.log('105', that.firstdata)
                    that.setDataChangeRadius(that.radiox, that.radioy)
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        // 自定义热图初始化方法
        init () {
            // 创建热图实例
            this.heatmap = Heatmap.create({
                container: document.getElementById('heatmapContainerWrapper'), // 挂载
                maxOpacity: 0.6,
                radius: 50, // 半径
                blur: 0.9,
                gradient: {
                    '.09': '#3800ff',
                    '.35': '#2f26fd',
                    '.4': '#00ffff',
                    '.5': '#00ffff',
                    '.65': '#08ff00',
                    '.85': '#f7fe00',
                    '.99': '#ff1700'
                }
            })
        },
        // setDataChangeRadius 更改坐标 大小 和 radius
        // 更改的坐标点基于局部变量定义 否则坐标点基于每次更改的值成比例计算 坐标趋于0
        setDataChangeRadius (radiox, radioy) {
            let newPoints = []
            for (let point of this.firstdata) {
                let newPoint = {
                    radius: this.radius * radiox,
                    x: Math.round(point.x * radiox),
                    y: Math.round(point.y * radioy),
                    val: 1
                }
                newPoints.push(newPoint)
            }
            let data = {
                max: 10,
                data: newPoints
            }
            this.heatmap.setData(data)
            console.log(this.heatmap)
        }
    }
}
</script>
<style>
#heatmapContainerWrapper {
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% auto;
}
#heatmapContainer {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
}
</style>
