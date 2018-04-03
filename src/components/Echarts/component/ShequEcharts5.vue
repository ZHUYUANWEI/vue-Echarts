<template>
<!-- 社区数据——意见分布 -->
<div>
  <div id="ShequEcharts5" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            legendData: ['批评', '表扬'],
            seriesData: [
                {
                    name: '批评',
                    value: 280,
                    itemStyle: {color: '#E15C27'}
                },
                {
                    name: '表扬',
                    value: 335,
                    itemStyle: {color: '#F6B42A'}
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
            if (document.getElementById('ShequEcharts5').offsetWidth < 400) {
                that.ShequEcharts5.setOption({
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
                that.ShequEcharts5.setOption({
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
            that.ShequEcharts5.resize()
        })
    },
    created () {},
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.ShequEcharts5 = this.$echarts.init(document.getElementById('ShequEcharts5'))
            // 绘制图表
            this.ShequEcharts5.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '意见分布',
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
                        name: '意见分布',
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
            if (document.getElementById('ShequEcharts5').offsetWidth < 400) {
                this.ShequEcharts5.setOption({
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
