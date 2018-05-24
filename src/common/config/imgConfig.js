const imgConfig = {
    // parkingYellow: require('../images/parkingYellow.svg') // 停车场黄色图标
    symbol: {
        // 停车场 0空，1不空
        park0: 'image://' + require('../images/park0.svg'),
        park1: 'image://' + require('../images/park1.svg'),
        // 井盖 0不警告，1警告
        manholeCover0: 'image://' + require('../images/manholeCover0.svg'),
        manholeCover1: 'image://' + require('../images/manholeCover1.svg'),
        // 垃圾桶 0空，1不空，2满
        trash0: 'image://' + require('../images/trash0.svg'),
        trash1: 'image://' + require('../images/trash1.svg'),
        trash2: 'image://' + require('../images/trash2.svg')
    },
    // 东方时尚中心大屏展示dome--parkManageDeviceL
    computerRoomBottomMap: require('../images/computerRoomBottomMap.jpg'), // 机房底图
    airConditioningStateOn: require('../images/airConditioningStateOn.png'), // 空调状态-开
    airConditioningStateOff: require('../images/airConditioningStateOff.png'), // 空调状态-关
    settingTemperature: require('../images/temperature.png'), // 设定温度
    settingHumidity: require('../images/humidity.png'), // 设定湿度
    returnAirHumidity: require('../images/humidity.png'), // 回风湿度
    actualTemperature: require('../images/temperature.png'), // 实际温度
    actualHumidity: require('../images/humidity.png'), // 实际湿度
    // 东方时尚中心大屏展示dome--parkManageDeviceC
    visitorsFlowrate: require('../images/visitorsFlowrate.png'), // 人流量
    // 东方时尚中心大屏展示dome--parkManageDeviceR
    peakTime: require('../images/peakTime.png'), // 峰值时间
    // 园区管理
    peopleHeatMap: require('../images/3D.jpg'), // 3D渲染图
    weatherWarning: require('../images/weatherWarning.png'), // 天气预警
    todayWeather: require('../images/white30.png'), // 今日天气图片
    futureWeather: require('../images/blue30.png'), // 未来天气图片
    // 地图获取坐标点
    getPoint: require('../images/3D.jpg') // 3D渲染图
}
export default imgConfig
