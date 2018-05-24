<template>
<div>
    <h3>lora动态显示垃圾桶、井盖、车位状态</h3>
    <div id="myChart" :style="{width: widthDiv ,height: heightDiv}"></div>
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
            sendData: {
                imgId: '8f7e2c4981da44d6be16827741836a2b',
                codes: ['00', '04', '09']
            },
            imgName: '',
            imgUrl: '',
            xMax: 0, // x轴最大坐标
            xMin: 0, // x轴最小坐标
            yMax: 0, // y轴最大坐标
            yMin: 0, // y轴最小坐标
            ratio: 0, // 高宽比
            legendRatio: 1, // 图例比
            manholeCoverData: [
                // 井盖
            ],
            trashData: [
                // 垃圾桶
            ],
            parkData: [
                // 停车位
            ]
        }
    },
    computed: {
    },
    mounted () {
        this.getNumber()
        setInterval(this.getNumber, 30000)
        // a = setInterval(this.getNumber, 1500)

        const that = this
        // 多个图表时响应
        window.addEventListener('resize', function () {
            that.widthChange = document.getElementById('myChart').offsetWidth
            that.heightChange = that.widthChange * that.ratio
            that.heightDiv = that.heightChange + 'px'

            that.drawLine()
        })
    },
    created () {},
    methods: {
        getNumber () {
            var sendData = JSON.stringify(this.sendData)
            this.$axios.post(config.apiConfig.loraShow, sendData, config.apiConfig.json)
                .then(res => {
                    console.log('成功', res)
                    this.imgName = res.data.data.imgName
                    this.imgUrl = res.data.data.imgUrl
                    this.xMax = res.data.data.imgXaxisMax
                    this.xMin = res.data.data.imgXaxisMin
                    this.yMax = res.data.data.imgYaxisMax
                    this.yMin = res.data.data.imgYaxisMin
                    // 井盖
                    res.data.data['00'].forEach((item, index, input) => {
                        this.manholeCoverData[index] = {}
                        this.manholeCoverData[index].value = []
                        this.manholeCoverData[index].value = [item.xaxis, item.yaxis]
                        if (item.alarmStatus === 1) {
                            this.manholeCoverData[index].symbol = config.imgConfig.symbol.manholeCover0
                        } else if (item.alarmStatus === 0) {
                            this.manholeCoverData[index].symbol = config.imgConfig.symbol.manholeCover1
                        }
                    })
                    // 垃圾桶
                    res.data.data['04'].forEach((item, index, input) => {
                        this.trashData[index] = {}
                        this.trashData[index].value = []
                        this.trashData[index].value = [item.xaxis, item.yaxis]
                        if (item.unused < 0.33) {
                            this.trashData[index].symbol = config.imgConfig.symbol.trash2
                        } else if (item.unused < 0.66) {
                            this.trashData[index].symbol = config.imgConfig.symbol.trash1
                        } else if (item.unused <= 1) {
                            this.trashData[index].symbol = config.imgConfig.symbol.trash0
                        }
                    })
                    // 停车场
                    // res.data.data['09'].forEach((item, index, input) => {
                    //     this.parkData[index] = {}
                    //     this.parkData[index].value = []
                    //     this.parkData[index].value = [item.xaxis, item.yaxis]
                    //     if (item.parkingLotStatus === '55') {
                    //         this.parkData[index].symbol = config.imgConfig.symbol.park0
                    //     } else if (item.parkingLotStatus === 'aa') {
                    //         this.parkData[index].symbol = config.imgConfig.symbol.park1
                    //     }
                    // })

                    this.ratio = Math.abs(this.yMin - this.yMax) / Math.abs(this.xMin - this.xMax)
                    this.widthChange = document.getElementById('myChart').offsetWidth
                    this.heightChange = document.getElementById('myChart').offsetWidth * this.ratio
                    this.heightDiv = this.heightChange + 'px'

                    this.drawLine()
                //   if (res.data.status_code !== '101') {
                //     clearInterval(a)
                //   }
                })
                .catch(err => {
                    console.log('错误', err)
                //   clearInterval(a)
                })
        },
        drawLine () {
            this.legendRatio = this.widthChange / 1000
            // 基于准备好的dom，初始化echarts实例
            this.myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            this.myChart.setOption({
                // 标题组件
                title: {
                    show: false,
                    text: this.imgName
                },
                // 图例组件
                legend: {
                    right: 0,
                    bottom: 'center',
                    orient: 'vertical',
                    itemWidth: 15 * this.legendRatio,
                    itemHeight: 15 * this.legendRatio,
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
                    show: false, // 是否显示 x 轴
                    min: this.xMin, // x 轴最小坐标
                    max: this.xMax, // x 轴最大坐标
                    axisPointer: {
                        show: false
                        // snap: true // 自动吸附 x 轴
                    }
                },
                yAxis: {
                    show: false, // 是否显示 y 轴
                    min: this.yMin, // y 轴最小坐标
                    max: this.yMax, // y 轴最大坐标
                    axisPointer: {
                        show: false
                        // snap: true // 自动吸附 y 轴
                    }
                },
                // 原生图形元素组件
                graphic: [{
                    type: 'image', // （背景图片）
                    z: -10,
                    style: {
                        image: this.imgUrl,
                        width: this.widthChange,
                        height: this.heightChange
                    }
                }],
                series: [
                    {
                        name: '井盖',
                        type: 'scatter',
                        coordinateSystem: 'cartesian2d', // 默认使用二维的直角坐标系
                        symbolSize: 15 * this.legendRatio, // 标记大小
                        symbol: config.imgConfig.symbol.manholeCover0,
                        // emphasis: {
                        //     // 高亮的图形和标签样式。
                        //     label: {
                        //         // 图形上的文本标签
                        //         show: true,
                        //         // formatter: '{@[2]}', // {c}
                        //         formatter: function (param) {
                        //             return param.data[2]
                        //         },
                        //         // formatter: '{c}',
                        //         position: 'top'
                        //     },
                        //     itemStyle: {
                        //         // 图形样式
                        //     }
                        // },
                        data: this.manholeCoverData
                    },
                    {
                        name: '垃圾桶',
                        type: 'scatter',
                        coordinateSystem: 'cartesian2d', // 默认使用二维的直角坐标系
                        symbol: config.imgConfig.symbol.trash2,
                        symbolSize: 15 * this.legendRatio, // 标记大小
                        data: this.trashData
                    },
                    {
                        name: '停车位',
                        type: 'scatter',
                        coordinateSystem: 'cartesian2d', // 默认使用二维的直角坐标
                        symbol: config.imgConfig.symbol.park0,
                        symbolSize: 15 * this.legendRatio, // 标记大小
                        data: this.parkData
                    }
                ]
            })

            this.myChart.resize({
                height: this.heightDiv
            })
        }
    }
}
</script>

<style>

</style>
