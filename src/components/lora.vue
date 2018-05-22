<template>
<div>
    <h3>lora动态显示垃圾桶、井盖、车位状态</h3>
  <div id="myChart" :style="{width: widthDiv ,height: heightDiv}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            heightDiv: '500px'
        }
    },
    computed: {
    },
    mounted () {
        this.drawLine()
    },
    created () {},
    methods: {
        drawLine () {
            var heatData = []
            for (var i = 0; i < 20; ++i) {
                heatData.push([
                    400 + Math.random() * 300,
                    5 + Math.random() * 10,
                    Math.random()
                ])
            }
            for (var j = 0; j < 100; ++j) {
                heatData.push([
                    100 + Math.random() * 600,
                    150 + Math.random() * 50,
                    Math.random()
                ])
            }
            for (var g = 0; g < 200; ++g) {
                heatData.push([
                    Math.random() * 1000,
                    Math.random() * 800,
                    Math.random() * 0.5
                ])
            }
            // 基于准备好的dom，初始化echarts实例
            this.myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            this.myChart.setOption({
                title: {
                    text: '热力图自定义样式'
                },
                series: [
                    {
                        type: 'heatmap',
                        data: heatData,
                        hoverable: false,
                        gradientColors: [{
                            offset: 0.4,
                            color: 'green'
                        }, {
                            offset: 0.5,
                            color: 'yellow'
                        }, {
                            offset: 0.8,
                            color: 'orange'
                        }, {
                            offset: 1,
                            color: 'red'
                        }],
                        minAlpha: 0.2,
                        valueScale: 2,
                        opacity: 0.6
                    }
                ]

            })
        }
    }
}
</script>

<style>

</style>
