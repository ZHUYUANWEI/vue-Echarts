<template>
<div>
  <div id="myChart" :style="{width: widthDiv ,height: heightDiv}"></div>
  <div class="abc">123</div>
  <!-- <button @click="aa">宽</button>
  <button @click="bb">窄{{ratio}}</button> -->
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%',
            heightDiv: 'auto',
            widthChange: '', // 画布x轴
            heightChange: '', // 画布y轴
            imgName: '招商客户分析',
            xMax: 45, // x轴最大坐标
            xMin: -244, // x轴最小坐标
            yMax: 130, // y轴最大坐标
            yMin: -19, // y轴最小坐标
            ratio: 0, // 高宽比.5159
            manholeCoverData: [
                // 井盖
                {
                    value: [-117.4, 42.4],
                    symbol: 'circle',
                    symbolSize: 10
                },
                {
                    value: [-107.9, 21],
                    symbol: 'image://' + require('./../../../assets/images/icon.png'),
                    symbolSize: 10,
                    itemStyle: {
                        normal: {
                            color: '#999'
                        }
                    }
                },

                // [-117.4, 42.4, '正常'],
                // [-107.9, 21, '正常'],
                [-110.7, 0.95, '正常'],
                [-121.46, 11.8, '不正常'],
                [-133.4, 25.9, '正常']
            ],

            trashData: [
                // 垃圾桶
                [-111.2, 13.2, '空'],
                [-115.2, -1.8, '已满'],
                [-124.9, 18.6, '三分之一'],
                [-137, 30, '三分之一'],
                [-132.6, 33.2, '三分之二']
            ],
            parkData: [
                // 停车位
                [-100.3, 53, '已停车']
            ],
            data: {}
        }
    },
    // props: ['ratio22'],
    computed: {
    },
    mounted () {
    // imgXaxisMax imgXaxisMin imgYaxisMax imgYaxisMin imgUrl
        this.ratio =
      Math.abs(this.yMin - this.yMax) / Math.abs(this.xMin - this.xMax)
        this.widthChange = document.getElementById('myChart').offsetWidth
        this.heightChange =
      document.getElementById('myChart').offsetWidth * this.ratio
        this.heightDiv = this.heightChange + 'px'
        this.drawLine()
        // 监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
        const that = this
        // window.onresize = function () {
        //   that.widthChange = document.getElementById('myChart').offsetWidth
        //   that.heightChange = that.widthChange * that.ratio
        //   that.heightDiv = that.heightChange + 'px'
        //   // 浏览器大小改变时canvas重绘  that.myChart.resize()
        //   that.drawLine()
        // }
        window.addEventListener('resize', function () {
            // 多个图表时响应
            that.widthChange = document.getElementById('myChart').offsetWidth
            that.heightChange = that.widthChange * that.ratio
            that.heightDiv = that.heightChange + 'px'
            // 浏览器大小改变时canvas重绘  that.myChart.resize()
            that.drawLine()
        })
    },
    created () {},
    methods: {
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            this.myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            this.myChart.setOption({
                // 标题组件
                title: {
                    text: this.imgName
                },
                // 图例组件
                legend: {
                    right: 0,
                    bottom: 'center',
                    orient: 'vertical',
                    textStyle: { color: 'red' }, // 设置文本
                    data: ['井盖', '垃圾桶', '停车位']
                },
                // 直角坐标系网格
                grid: {
                    left: 0, // 直角坐标系网格离容器左侧的距离
                    bottom: 0,
                    width: '100%', // 直角坐标系网格的宽度
                    height: '100%'
                },
                xAxis: {
                    show: true, // 是否显示 x 轴
                    min: this.xMin, // x 轴最小坐标
                    max: this.xMax, // x 轴最大坐标
                    axisPointer: {
                        show: 'cross'
                        // snap: true // 自动吸附 x 轴
                    }
                },
                yAxis: {
                    show: true, // 是否显示 y 轴
                    min: this.yMin, // y 轴最小坐标
                    max: this.yMax, // y 轴最大坐标
                    axisPointer: {
                        show: 'cross'
                        // snap: true // 自动吸附 y 轴
                    }
                },
                // 原生图形元素组件
                graphic: [
                    {
                        type: 'image', // （背景图片）
                        z: -10,
                        style: {
                            image: require('../../../assets/images/timg.jpg'),
                            width: this.widthChange,
                            height: this.heightChange
                        }
                    }
                ],
                series: [
                    {
                        name: '井盖',
                        type: 'scatter',
                        coordinateSystem: 'cartesian2d', // 默认使用二维的直角坐标系
                        label: {
                            // 图形上的文本标签
                        },
                        itemStyle: {
                            // 图形样式
                            color: '#B6E620'
                        },
                        emphasis: {
                            // 高亮的图形和标签样式。
                            label: {
                                // 图形上的文本标签
                                show: true,
                                // formatter: '{@[2]}', // {c}
                                formatter: function (param) {
                                    return param.data[2]
                                },
                                // formatter: '{c}',
                                position: 'top'
                            },
                            itemStyle: {
                                // 图形样式
                            }
                        },
                        data: this.manholeCoverData
                    },
                    {
                        name: '垃圾桶',
                        type: 'scatter',
                        coordinateSystem: 'cartesian2d', // 默认使用二维的直角坐标系
                        symbol: 'circle', // 'circle','rect','pin'
                        // symbol: 'image://http://news.baidu.com/resource/echarts-2.1.8/asset/ico/icon-red-circle.png',
                        // symbol: 'image:// ../../../../assets/images/icon.png',
                        // symbol: require('./../../../../assets/logo.png'),

                        // symbolSize: 10, // 标记大小
                        itemStyle: {
                            color: '#FB161C'
                        },
                        data: this.trashData
                    },
                    {
                        name: '停车位',
                        type: 'scatter',
                        coordinateSystem: 'cartesian2d', // 默认使用二维的直角坐标系
                        symbol:
              'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z', // 标记的类型可以用矢量路径
                        // 'rect','pin'
                        // symbolSize: 10, // 标记大小
                        symbolRotate: 35, // 标记的倾斜角度
                        itemStyle: {
                            color: '#FCCC38'
                        },
                        data: this.parkData
                    }
                ]
            })

            this.myChart.resize({
                height: this.heightDiv
            })
        },
        aa () {
            // 实时改变，动态传输，（直接将要改变的值重新赋值，不需要改变的会使用原来的值，不需要再写一遍）
            // this.myChart.setOption({
            //   // 背景图片
            //   graphic: [{
            //     style: {
            //       width: 1938,
            //       height: 1000
            //     }
            //   }]
            // })
        },
        bb () {
            // this.myChart.resize({
            //   width: 20,
            //   height: 200
            // })
        }
    }
}

// var charts = [];
// myChart = echarts.init(document.getElementById('main'));
// myChart.setOption(option);
// charts.push(myChart);

// myChart = echarts.init(document.getElementById('main2'));
// myChart.setOption(option);
// charts.push(myChart);

// window.onresize = function(){
//   for(var i = 0; i < charts.length; i++){
//       charts[i].resize();
//   }
// }
</script>

<style>

</style>
