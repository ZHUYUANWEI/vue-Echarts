<template>
<!-- 客房管理——房型成交金额分析 -->
<div>
  <div id="ShequEcharts7" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            legendData: ['商务A', '商务B', '精品套房', '亲子房', '主题房'],
            seriesData: [
                {
                    name: '商务A',
                    value: '13251',
                    itemStyle: {
                        normal: {
                            color: '#3E3894'
                        }
                    }
                },
                {
                    name: '商务B',
                    value: '16258',
                    itemStyle: {
                        normal: {
                            color: '#8D2C9B'
                        }
                    }
                },
                {
                    name: '精品套房',
                    value: '9382',
                    itemStyle: {
                        normal: {
                            color: '#EE6019'
                        }
                    }
                },
                {
                    name: '亲子房',
                    value: '12370',
                    itemStyle: {
                        normal: {
                            color: '#BC1642'
                        }
                    }
                },
                {
                    name: '主题房',
                    value: '7224',
                    itemStyle: {
                        normal: {
                            color: '#FFCD15'
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
            if (document.getElementById('ShequEcharts7').offsetWidth < 400) {
                that.ShequEcharts7.setOption({
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
                that.ShequEcharts7.setOption({
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
            that.ShequEcharts7.resize()
        })
    },
    created () {},
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.ShequEcharts7 = this.$echarts.init(document.getElementById('ShequEcharts7'))
            // 绘制图表
            this.ShequEcharts7.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '房型成交金额分析',
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
                        name: '房型成交金额分析',
                        type: 'pie',
                        center: ['50%', '45%'],
                        radius: ['12%', '75%'],
                        clockwise: true,
                        data: this.seriesData,
                        roseType: 'area'
                    }
                ]
            })
            if (document.getElementById('ShequEcharts7').offsetWidth < 400) {
                this.ShequEcharts7.setOption({
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
