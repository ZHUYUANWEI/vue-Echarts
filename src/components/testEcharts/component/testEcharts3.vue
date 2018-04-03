<template>
<div>
  <div id="youChart1" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
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
        this.drawLine()
        const that = this
        window.addEventListener('resize', function () {
            // 浏览器大小改变时canvas重绘
            that.youChart1.resize()
        })
    },
    created () {},
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.youChart1 = this.$echarts.init(document.getElementById('youChart1'))
            // 绘制图表
            this.youChart1.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                // title: {
                //   text: "招商客户分析",
                //   // subtext: '总招商客户组',
                //   show: false,
                //   textStyle: {
                //     color: "#ffffff"
                //   },
                //   x: "left",
                //   y: "5%"
                // },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c} ({d}%)'
                },
                legend: {
                    // show: false,
                    orient: 'horizontal',
                    right: 'center',
                    bottom: 0,
                    data: [
                        {
                            name: '潜在客户'
                        },
                        {
                            name: '意向客户'
                        },
                        {
                            name: '初次接触'
                        },
                        {
                            name: '成交客户'
                        },
                        {
                            name: '流失客户'
                        }
                    ]
                },
                series: [
                    {
                        name: '招商客户',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        data: [
                            {
                                name: '潜在客户',
                                value: '9',
                                itemStyle: { color: '#0085E2' }
                            },
                            {
                                name: '意向客户',
                                value: '3',
                                itemStyle: { color: '#00B6FC' }
                            },
                            {
                                name: '初次接触',
                                value: '3',
                                itemStyle: { color: '#02D0CF' }
                            },
                            {
                                name: '成交客户',
                                value: '2',
                                itemStyle: { color: '#00C980' }
                            },
                            {
                                name: '流失客户',
                                value: '1',
                                itemStyle: { color: '#9CE736' }
                            }
                        ],
                        label: {
                            // show: false,
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
        }
    }
}
</script>

<style>

</style>
