<template>
<!-- 社区数据——工单 -->
<div>
  <div id="ShequEcharts2" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            huneiData: [89, 79, 87, 96, 85, 79, 100, 88, 120, 85, 130, 79],
            gongquData: [50, 35, 42, 75, 65, 48, 40, 60, 59, 35, 48, 25],
            baoanData: [10, 20, 18, 10, 20, 25, 40, 75, 20, 25, 35, 25],
            baojieData: [175, 137, 175, 162, 155, 169, 152, 138, 170, 156, 178, 165]
        }
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 浏览器大小改变时canvas重绘
            that.ShequEcharts2.resize()
        })
    },
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.ShequEcharts2 = this.$echarts.init(
                document.getElementById('ShequEcharts2')
            )
            // 绘制图表
            this.ShequEcharts2.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '工单',
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
                legend: {
                    orient: 'horizontal',
                    bottom: 0,
                    textStyle: {
                        color: '#064C9F'
                    },
                    data: ['户内报修', '工区报修', '呼叫保安', '呼叫保洁']
                },
                grid: {
                    left: '10',
                    right: '45',
                    top: '35',
                    bottom: '30',
                    containLabel: true
                },
                xAxis: {
                    name: '月份',
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
                    name: '工单数',
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
                series: [
                    {
                        name: '户内报修',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#FF0000'
                            }
                        },
                        data: this.huneiData
                    },
                    {
                        name: '工区报修',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#FEB601'
                            }
                        },
                        data: this.gongquData
                    },
                    {
                        name: '呼叫保安',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#26FF00'
                            }
                        },
                        data: this.baoanData
                    },
                    {
                        name: '呼叫保洁',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#0009FF'
                            }
                        },
                        data: this.baojieData
                    }
                ]
            })
        }
    }
}
</script>

<style>

</style>
