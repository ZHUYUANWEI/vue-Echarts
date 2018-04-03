<template>
<div>
  <div id="KanbanEcharts4" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            shishouData: [120, 132, 101, 134, 90, 230, 210, 410, 182, 191, 234, 290],
            shouruData: [220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230],
            kongzhiData: [150, 232, 201, 154, 190, 330, 410, 182, 191, 234, 290, 330],
            yusuanData: [430, 470, 420, 480, 530, 720, 750, 666, 450, 398, 450, 800]
        }
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 浏览器大小改变时canvas重绘
            that.KanbanEcharts4.resize()
        })
    },
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.KanbanEcharts4 = this.$echarts.init(
                document.getElementById('KanbanEcharts4')
            )
            // 绘制图表
            this.KanbanEcharts4.setOption({
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
                    data: ['实收', '收入', '空置租金', '收入预算']
                },
                grid: {
                    left: '10',
                    right: '20',
                    top: '10',
                    bottom: '25',
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
                    // name: '金额',
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
                        name: '实收',
                        type: 'bar',
                        stack: '资金',
                        barCategoryGap: '50%',
                        itemStyle: {color: '#443BC5'},
                        data: this.shishouData
                    },
                    {
                        name: '收入',
                        type: 'bar',
                        stack: '资金',
                        barCategoryGap: '50%',
                        itemStyle: {color: '#42CEE9'},
                        data: this.shouruData
                    },
                    {
                        name: '空置租金',
                        type: 'bar',
                        stack: '资金',
                        barCategoryGap: '50%',
                        itemStyle: {color: '#FFD600'},
                        data: this.kongzhiData
                    },
                    {
                        name: '收入预算',
                        type: 'line',
                        itemStyle: {
                            color: '#82C7F7'

                        },
                        lineStyle: {
                            normal: {
                                // color: '#82C7F7',
                                type: 'dashed'
                            }
                        },
                        data: this.yusuanData
                    }
                ]
            })
        }
    }
}
</script>

<style>

</style>
