<template>
<div>
  <div id="youChart" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            heightDiv: 'auto'
        }
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        console.log('heightDiv', this.heightDiv)
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 浏览器大小改变时canvas重绘
            that.youChart.resize()
        })
    },
    created () {},
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.youChart = this.$echarts.init(document.getElementById('youChart'))
            // 绘制图表
            this.youChart.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                title: {
                    text: '每月成交企业数',
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    // formatter: "{b} : {c}家"
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    data: [
                        '1月',
                        '2月',
                        '3月',
                        '4月',
                        '5月',
                        '6月',
                        '7月',
                        '8月',
                        '9月',
                        '10月',
                        '11月',
                        '12月'
                    ],
                    axisLabel: {
                        textStyle: {
                            // color: '#fff'
                        }
                    },
                    axisTick: {
                        // show: false
                    },
                    axisLine: {
                        // show: false
                    },
                    z: 10
                },
                yAxis: {
                    axisLine: {
                        // show: false
                    },
                    axisTick: {
                        // show: false
                    },
                    axisLabel: {
                        textStyle: {
                            // color: '#fff'
                        }
                    }
                },
                dataZoom: [
                    {
                        type: 'inside'
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        itemStyle: {
                            // normal: {
                            //   // eslint-disable-next-line
                            //   color: new echarts.graphic.LinearGradient(
                            //     0, 0, 0, 1,
                            //     [
                            //       {offset: 0, color: '#C2EAFB'},
                            //       {offset: 1, color: '#1193EE'}
                            //     ]
                            //   )
                            // },
                            // emphasis: {
                            //   // eslint-disable-next-line
                            //   color: new echarts.graphic.LinearGradient(
                            //     0, 0, 0, 1,
                            //     [
                            //       {offset: 0, color: '#1193EE'},
                            //       {offset: 1, color: '#C2EAFB'}
                            //     ]
                            //   )
                            // }
                        },
                        barCategoryGap: '50%',
                        data: [220, 182, 191, 290, 330, 310, 210, 122, 133, 334, 198, 220]
                    }
                ]
            })
        }
    }
}
</script>

<style>

</style>
