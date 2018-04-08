<template>
<!-- 社区数据——工单 -->
<div>
  <div id="ShequEcharts3" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            biaoyangData: [105, 79, 87, 96, 85, 79, 100, 88, 120, 85, 130, 79],
            pipingData: [50, 35, 82, 75, 65, 48, 40, 60, 59, 35, 48, 25]
        };
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {
        this.drawLine();
        const that = this;
        window.addEventListener('resize', function () {
            // 浏览器大小改变时canvas重绘
            that.ShequEcharts3.resize();
        });
    },
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.ShequEcharts3 = this.$echarts.init(
                document.getElementById('ShequEcharts3')
            );
            // 绘制图表
            this.ShequEcharts3.setOption({
                backgroundColor: 'rgba(128, 128, 128, 0)',
                // toolbox: {
                //     feature: {
                //         saveAsImage: {} // 保存为图片
                //     }
                // },
                title: {
                    text: '意见',
                    show: false
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
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
                    data: ['表扬', '批评']
                },
                grid: {
                    left: '10',
                    right: '45',
                    top: '35',
                    bottom: '30',
                    containLabel: true
                },
                xAxis: {
                    name: '月份',
                    type: 'category',
                    boundaryGap: false,
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
                    name: '意见数',
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
                        name: '表扬',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#E69F0B'
                            }
                        },
                        data: this.biaoyangData
                    },
                    {
                        name: '批评',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#C63F0A'
                            }
                        },
                        data: this.pipingData
                    }
                ]
            });
        }
    }
};
</script>

<style>

</style>
