<template>
<!-- 社区数据——物业收费项目 -->
<div>
  <div id="ShequEcharts1" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
    data () {
        return {
            widthDiv: '100%',
            xData: ['水费', '电费', '物业费', '电梯费', '停车费', '污水费', '垃圾费', '燃气费', '采暖费', '通讯费'],
            yingjiaoData: [13640, 18532, 20123, 19734, 17549, 14574, 12145, 13976, 15671, 16483],
            shijiaoData: [12139, 17976, 17708, 19141, 16145, 13262, 12145, 12997, 14730, 15988],
            jiaofeilvData: [89, 97, 88, 97, 92, 91, 86, 93, 94, 97]
        }
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 浏览器大小改变时canvas重绘
            that.ShequEcharts1.resize()
        })
    },
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.ShequEcharts1 = this.$echarts.init(
                document.getElementById('ShequEcharts1')
            )
            // 绘制图表
            this.ShequEcharts1.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '资产收益图',
                    show: false
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
                },
                legend: {
                    orient: 'horizontal',
                    bottom: 0,
                    textStyle: {
                        color: '#064C9F'
                    },
                    data: ['应缴金额', '实缴金额', '缴费率']
                },
                grid: {
                    left: '10',
                    right: '10',
                    top: '35',
                    bottom: '30',
                    containLabel: true
                },
                xAxis: {
                    // name: '项目',
                    type: 'category',
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
                yAxis: [
                    {
                        name: '金额',
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
                    {
                        type: 'value',
                        name: '缴费率',
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
                    }
                ],
                series: [
                    {
                        name: '应缴金额',
                        type: 'bar',
                        barCategoryGap: '25%',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: '#3163FF'
                                }, {
                                    offset: 1,
                                    color: '#74C5FF'
                                }]
                            )
                        },
                        data: this.yingjiaoData
                    },
                    {
                        name: '实缴金额',
                        type: 'bar',
                        barCategoryGap: '25%',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: '#00AF6C'
                                }, {
                                    offset: 1,
                                    color: '#90ED65'
                                }]
                            )
                        },
                        data: this.shijiaoData
                    },
                    {
                        name: '缴费率',
                        type: 'bar',
                        yAxisIndex: 1,
                        barCategoryGap: '25%',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: '#FF9A2D'
                                }, {
                                    offset: 1,
                                    color: '#F5DC0A'
                                }]
                            )
                        },
                        data: this.jiaofeilvData
                    }
                ]
            })
        }
    }
}
</script>

<style>

</style>
