<template>
<div>
    <h3>地图获取坐标点</h3>
    <p>坐标集: {{data}}</p>
  <div id="myChart" :style="{width: widthDiv ,height: heightDiv}" @click="getPoint"></div>
</div>
</template>

<script>
import config from './../common/config/config.js'
export default {
    data () {
        return {
            widthDiv: '100%',
            heightDiv: 'auto',
            widthChange: '', // 画布x轴
            heightChange: '', // 画布y轴
            imgName: '测试添加坐标点',
            imgUrl: config.imgConfig.getPoint,
            xMax: 10000, // x轴最大坐标
            xMin: 0, // x轴最小坐标
            yMax: 7500, // y轴最大坐标
            yMin: 0, // y轴最小坐标
            ratio: 0, // 高宽比.5159
            data: []
        }
    },
    computed: {
    },
    mounted () {
        // this.ratio = Math.abs(this.yMin - this.yMax) / Math.abs(this.xMin - this.xMax)
        // this.widthChange = document.getElementById('myChart').offsetWidth
        // this.heightChange = document.getElementById('myChart').offsetWidth * this.ratio
        // this.heightDiv = this.heightChange + 'px'
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 多个图表时响应
            // that.widthChange = document.getElementById('myChart').offsetWidth
            // that.heightChange = that.widthChange * that.ratio
            // that.heightDiv = that.heightChange + 'px'
            // 浏览器大小改变时canvas重绘  that.myChart.resize()
            that.drawLine()
        })
    },
    created () {},
    methods: {
        drawLine () {
            this.ratio = Math.abs(this.yMin - this.yMax) / Math.abs(this.xMin - this.xMax)
            this.widthChange = document.getElementById('myChart').offsetWidth
            this.heightChange = document.getElementById('myChart').offsetWidth * this.ratio
            this.heightDiv = this.heightChange + 'px'

            // 基于准备好的dom，初始化echarts实例
            this.myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            this.myChart.setOption({
                // 标题组件
                title: {
                    text: this.imgName,
                    textStyle: {
                        color: '#fff'
                    },
                    left: 'right'
                },
                // 图例组件
                legend: {
                    right: 0,
                    bottom: 'center',
                    orient: 'vertical',
                    textStyle: { color: 'red' }, // 设置文本
                    data: ['井盖', '垃圾桶', '停车位']
                },
                // 直角坐标系网格
                grid: {
                    left: 0, // 直角坐标系网格离容器左侧的距离
                    bottom: 0,
                    width: '100%', // 直角坐标系网格的宽度
                    height: '100%'
                },
                xAxis: {
                    show: true, // 是否显示 x 轴
                    min: this.xMin, // x 轴最小坐标
                    max: this.xMax, // x 轴最大坐标
                    axisPointer: {
                        show: 'cross'
                        // snap: true // 自动吸附 x 轴
                    }
                },
                yAxis: {
                    inverse: true, // y轴反向
                    show: true, // 是否显示 y 轴
                    min: this.yMin, // y 轴最小坐标
                    max: this.yMax, // y 轴最大坐标
                    axisPointer: {
                        show: 'cross'
                        // snap: true // 自动吸附 y 轴
                    }
                },
                // 原生图形元素组件
                graphic: [
                    {
                        type: 'image', // （背景图片）
                        z: -10,
                        style: {
                            image: this.imgUrl,
                            width: this.widthChange,
                            height: this.heightChange
                        }
                    }
                ],
                series: [
                    {
                        id: 'a',
                        type: 'line',
                        smooth: true,
                        symbolSize: 20,
                        data: this.data
                    }
                ]
            })

            this.myChart.resize({
                height: this.heightDiv
            })
        },
        getPoint (params) {
            var pointInPixel = [params.offsetX, params.offsetY]
            var pointInGrid = this.myChart.convertFromPixel('grid', pointInPixel)
            // console.log('pointInPixel像素', pointInPixel)
            // console.log('pointInGrid坐标', pointInGrid)
            pointInGrid[0] = Math.floor(pointInGrid[0])
            pointInGrid[1] = Math.floor(pointInGrid[1])
            if (this.myChart.containPixel('grid', pointInPixel)) {
                this.data.push(pointInGrid)

                this.myChart.setOption({
                    series: [{
                        id: 'a',
                        data: this.data
                    }]
                })
            }
            console.log('坐标', pointInGrid)
            console.log('坐标集', this.data)
        }
    }
}
</script>

<style>

</style>
