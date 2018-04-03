<template>
<div>
  <div id="HomeEcharts2" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
    data () {
        return {
            widthDiv: '100%',
            xData: ['0：00', '1：00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
            seriesData: [0, 10, 20, 18, 10, 20, 25, 40, 60, 70, 85, 98, 125, 170, 110, 60, 90, 65, 105, 160, 75, 35, 25, 10, 0]
        }
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 浏览器大小改变时canvas重绘
            that.HomeEcharts2.resize()
        })
    },
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.HomeEcharts2 = this.$echarts.init(
                document.getElementById('HomeEcharts2')
            )
            // 绘制图表
            this.HomeEcharts2.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '今日入园车辆趋势',
                    show: false
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    left: '10',
                    right: '20',
                    top: '35',
                    bottom: '10',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { // 坐标轴轴线相关设置
                        lineStyle: {
                            color: '#b0bfd0'
                        }
                    },
                    axisLabel: { // 坐标轴刻度标签的相关设置
                        textStyle: {
                            color: '#b0bfd0'
                        }
                    },
                    data: this.xData
                },
                yAxis: {
                    // name: '车次(辆)',
                    type: 'value',
                    axisLine: { // 坐标轴轴线相关设置
                        lineStyle: {
                            color: '#b0bfd0'
                        }
                    },
                    axisLabel: { // 坐标轴刻度标签的相关设置
                        textStyle: {
                            color: '#b0bfd0'
                        }
                    }
                },
                series: [{
                    type: 'line',
                    smooth: true, // 平滑曲线
                    itemStyle: {
                        normal: {
                            color: '#3EB500'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: '#9FD682'
                                }, {
                                    offset: 1,
                                    color: '#E7FF8B'
                                }]
                            )
                        }
                    },
                    data: this.seriesData
                }]
            })
        }
    }
}
</script>

<style>

</style>
