<template>
<!-- 社区数据——业主总数 -->
<div>
  <div id="ShequEcharts4" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            legendData: ['未注册', '已注册'],
            seriesData: [
                {
                    name: '已注册',
                    value: 274,
                    itemStyle: {
                        normal: {
                            color: '#DD2B26'
                        }
                    }
                },
                {
                    name: '未注册',
                    value: 235,
                    itemStyle: {
                        normal: {
                            color: '#89311D'
                        }
                    }
                }
            ]
        }
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 盒子小于400时隐藏引导线与标签文字
            if (document.getElementById('ShequEcharts4').offsetWidth < 400) {
                that.ShequEcharts4.setOption({
                    series: [
                        {
                            label: {
                                show: false,
                                emphasis: {
                                    show: false
                                }
                            },
                            labelLine: {
                                show: false,
                                emphasis: {
                                    show: false
                                }
                            }
                        }
                    ]
                })
            } else {
                that.ShequEcharts4.setOption({
                    series: [
                        {
                            label: {
                                show: true,
                                emphasis: {
                                    show: true
                                }
                            },
                            labelLine: {
                                show: true,
                                emphasis: {
                                    show: true
                                }
                            }
                        }
                    ]
                })
            }
            // 浏览器大小改变时canvas重绘
            that.ShequEcharts4.resize()
        })
    },
    created () {},
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.ShequEcharts4 = this.$echarts.init(document.getElementById('ShequEcharts4'))
            // 绘制图表
            this.ShequEcharts4.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '业主总数',
                    show: false
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c} ({d}%)'
                },
                legend: {
                    // show: false,
                    orient: 'horizontal',
                    bottom: 0,
                    textStyle: {
                        color: '#064C9F'
                    },
                    data: this.legendData
                },
                series: [
                    {
                        name: '业主总数',
                        type: 'pie',
                        center: ['50%', '45%'],
                        radius: '62%',
                        clockwise: false,
                        data: this.seriesData.sort(function (a, b) { return a.value - b.value }),
                        roseType: 'radius',
                        itemStyle: {
                            normal: {
                                color: '#c23531',
                                shadowBlur: 100,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
            if (document.getElementById('ShequEcharts4').offsetWidth < 400) {
                this.ShequEcharts4.setOption({
                    series: [
                        {
                            label: {
                                show: false,
                                emphasis: {
                                    show: false
                                }
                            },
                            labelLine: {
                                show: false,
                                emphasis: {
                                    show: false
                                }
                            }
                        }
                    ]
                })
            }
        }
    }
}
</script>

<style>

</style>
