<template>
<!-- 管理看板——招商客户分析 -->
<div>
  <div id="KanbanEcharts1" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            statusCountList: [
                {
                    status: 'UNCLASSIFY',
                    count: 125,
                    statusDescription: '初次接触'
                },
                {
                    status: 'POTENTIAL',
                    count: 115,
                    statusDescription: '潜在客户'
                },
                {
                    status: 'INTENTIONAL',
                    count: 75,
                    statusDescription: '意向客户'
                },
                {
                    status: 'DEALED',
                    count: 109,
                    statusDescription: '成交客户'
                },
                {
                    status: 'LOST',
                    count: 70,
                    statusDescription: '流失客户'
                }
            ],
            legendData: [],
            seriesData: [
                {
                    itemStyle: {
                        normal: {
                            color: '#0085E2'
                        }
                    }
                },
                {
                    itemStyle: {
                        normal: {
                            color: '#00B6FC'
                        }
                    }
                },
                {
                    itemStyle: {
                        normal: {
                            color: '#02D0CF'
                        }
                    }
                },
                {
                    itemStyle: {
                        normal: {
                            color: '#00C980'
                        }
                    }
                },
                {
                    itemStyle: {
                        normal: {
                            color: '#9CE736'
                        }
                    }
                }
            ]
        }
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        this.statusCountList.forEach((item, index, input) => {
            this.legendData.push(item.statusDescription)
            this.seriesData[index].name = item.statusDescription
            this.seriesData[index].value = item.count
        })
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 盒子小于400时隐藏引导线与标签文字
            if (document.getElementById('KanbanEcharts1').offsetWidth < 400) {
                that.KanbanEcharts1.setOption({
                    series: [
                        {
                            radius: ['50%', '70%'],
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
                that.KanbanEcharts1.setOption({
                    series: [
                        {
                            radius: ['35%', '55%'],
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
            that.KanbanEcharts1.resize()
        })
    },
    created () {},
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.KanbanEcharts1 = this.$echarts.init(document.getElementById('KanbanEcharts1'))
            // 绘制图表
            this.KanbanEcharts1.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '招商客户分析',
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
                    data: this.legendData
                },
                series: [
                    {
                        name: '招商客户',
                        type: 'pie',
                        center: ['50%', '45%'],
                        radius: ['40%', '60%'],
                        data: this.seriesData,
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                borderColor: '#ffffff'
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
            if (document.getElementById('KanbanEcharts1').offsetWidth < 400) {
                this.KanbanEcharts1.setOption({
                    series: [
                        {
                            radius: ['50%', '70%'],
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
