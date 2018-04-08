<template>
<!-- 社区数据——已注册用户分布 -->
<div>
  <div id="ShequEcharts7" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            legendData: ['业主', '副业主', '家属', '保姆', '租客', '游客'],
            seriesData: [
                {
                    name: '业主',
                    value: 335,
                    itemStyle: {
                        normal: {
                            color: '#1464E0'
                        }
                    }
                },
                {
                    name: '副业主',
                    value: 310,
                    itemStyle: {
                        normal: {
                            color: '#0D0AF5'
                        }
                    }
                },
                {
                    name: '家属',
                    value: 274,
                    itemStyle: {
                        normal: {
                            color: '#F5A90A'
                        }
                    }
                },
                {
                    name: '保姆',
                    value: 300,
                    itemStyle: {
                        normal: {
                            color: '#7600B9'
                        }
                    }
                },
                {
                    name: '租客',
                    value: 274,
                    itemStyle: {
                        normal: {
                            color: '#DD2B26'
                        }
                    }
                },
                {
                    name: '游客',
                    value: 235,
                    itemStyle: {
                        normal: {
                            color: '#89311D'
                        }
                    }
                }
            ]
        };
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        this.drawLine();
        const that = this;
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
                });
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
                });
            }
            // 浏览器大小改变时canvas重绘
            that.ShequEcharts7.resize();
        });
    },
    created () {},
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.ShequEcharts7 = this.$echarts.init(document.getElementById('ShequEcharts7'));
            // 绘制图表
            this.ShequEcharts7.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '已注册用户分布',
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
                        name: '已注册用户分布',
                        type: 'pie',
                        center: ['50%', '45%'],
                        radius: '62%',
                        clockwise: false,
                        data: this.seriesData.sort(function (a, b) { return a.value - b.value; }),
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
            });
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
                });
            }
        }
    }
};
</script>

<style>

</style>
