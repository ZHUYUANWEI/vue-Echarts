<template>
<div>
  <div id="KanbanEcharts2" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            items: [
                {
                    name: '网络科技',
                    count: 7,
                    areaSize: 2026,
                    spaceUnit: 'P'
                },
                {
                    name: '物联网(包含智能家居)',
                    count: 5,
                    areaSize: 1610,
                    spaceUnit: 'P'
                },
                {
                    name: '互联网',
                    count: 3,
                    areaSize: 760,
                    spaceUnit: 'P'
                },
                {
                    name: '软件开发',
                    count: 3,
                    areaSize: 815,
                    spaceUnit: 'P'
                },
                {
                    name: '电商贸易',
                    count: 2,
                    areaSize: 560,
                    spaceUnit: 'P'
                },
                {
                    name: '其他行业',
                    count: 21,
                    areaSize: 7895,
                    spaceUnit: 'P'
                }
            ],
            legendData: [],
            seriesData: [
                {
                    itemStyle: {color: '#0085E2 '}
                },
                {
                    itemStyle: {color: '#00B6FC'}
                },
                {
                    itemStyle: {color: '#02D0CF'}
                },
                {
                    itemStyle: {color: '#00C980'}
                },
                {
                    itemStyle: {color: '#9CE736'}
                },
                {
                    itemStyle: {color: '#F4CF03'}
                }]
        }
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        this.items.forEach((item, index, input) => {
            this.legendData.push(item.name)
            this.seriesData[index].name = item.name
            this.seriesData[index].value = item.count
        })
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 盒子小于400时隐藏引导线与标签文字
            if (document.getElementById('KanbanEcharts2').offsetWidth < 400) {
                that.KanbanEcharts2.setOption({
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
                that.KanbanEcharts2.setOption({
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
            that.KanbanEcharts2.resize()
        })
    },
    created () {},
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.KanbanEcharts2 = this.$echarts.init(document.getElementById('KanbanEcharts2'))
            // 绘制图表
            this.KanbanEcharts2.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '入驻行业分析',
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
                        radius: ['35%', '55%'],
                        data: this.seriesData,
                        label: {
                            normal: {
                                formatter: function (val) { // 让series 中的文字进行换行
                                    var newStr = ' '
                                    var start, end
                                    var newRow = Math.ceil(val.name.length / 4)// 最多能显示几行，向上取整比如2.1就是3行
                                    if (val.name.length > 5) {
                                        for (var i = 0; i < newRow; i++) { // 循环次数就是行数
                                            var old = '' // 每次截取的字符
                                            start = i * 5 // 截取的起点
                                            end = start + 5 // 截取的终点
                                            if (i === newRow - 1) { // 最后一行就不换行了
                                                old = val.name.substring(start)
                                            } else {
                                                old = val.name.substring(start, end) + '\n'
                                            }
                                            newStr += old // 拼接字符串
                                        }
                                    } else { // 如果小于每行最多显示的字数就返回原来的字符串
                                        newStr = val.name
                                    }
                                    return newStr
                                }
                            }
                        },
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
            if (document.getElementById('KanbanEcharts2').offsetWidth < 400) {
                this.KanbanEcharts2.setOption({
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
