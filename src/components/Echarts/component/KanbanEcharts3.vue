<template>
<div>
  <div id="KanbanEcharts3" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
    data () {
        return {
            widthDiv: '100%',
            contractsData: [
                {
                    'year': 2015,
                    'month': 4,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2015,
                    'month': 5,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2015,
                    'month': 6,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2015,
                    'month': 7,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2015,
                    'month': 8,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2015,
                    'month': 9,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2015,
                    'month': 10,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2015,
                    'month': 11,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2015,
                    'month': 12,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 1,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 2,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 3,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 4,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 5,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 6,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 7,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 8,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 9,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 10,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 11,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2016,
                    'month': 12,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 1,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 2,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 3,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 4,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 5,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 6,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 7,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 8,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 9,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 10,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 11,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2017,
                    'month': 12,
                    'areaSize': 0,
                    'count': 0,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2018,
                    'month': 1,
                    'areaSize': 0,
                    'count': 7,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2018,
                    'month': 2,
                    'areaSize': 0,
                    'count': 5,
                    'spaceUnit': 'P'
                },
                {
                    'year': 2018,
                    'month': 3,
                    'areaSize': 122.31,
                    'count': 9,
                    'spaceUnit': 'P'
                }
            ],
            xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            seriesData: []
        }
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        var date = new Date()
        var year = date.getFullYear()
        this.contractsData.forEach((item, index, input) => {
            if (item.year === year) {
                this.seriesData.push(item.count)
            }
        })
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 浏览器大小改变时canvas重绘
            that.KanbanEcharts3.resize()
        })
    },
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.KanbanEcharts3 = this.$echarts.init(
                document.getElementById('KanbanEcharts3')
            )
            // 绘制图表
            this.KanbanEcharts3.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '每月成交企业数',
                    show: false
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    left: '10',
                    right: '20',
                    top: '10',
                    bottom: '10',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    // boundaryGap: false, //刻度点偏移
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
                    // name: '企业数',
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
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#C2EAFB'},
                                        {offset: 1, color: '#1193EE'}
                                    ]
                                )
                            },
                            emphasis: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#1193EE'},
                                        {offset: 1, color: '#C2EAFB'}
                                    ]
                                )
                            }
                        },
                        barCategoryGap: '50%',
                        data: this.seriesData
                    }
                ]
            })
        }
    }
}
</script>

<style>

</style>
