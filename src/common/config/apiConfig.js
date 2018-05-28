const apiConfig = {
    json: {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    },
    loraShow: '/lora/ShowService/show',

    getHeatmapData: '/showData/ruckus/real-time-data', // 获取人流热力图
    getWeather: '/showData/weather', // 获取天气预报

    getEnvironmentState: '/showData/siteData/airConData', // 数据中心环境状况/showData/siteData/airConData
    getPeopleNumber: '/showData/siteData/manFlow' // 人流量/showData/siteData/manFlow
}

export default apiConfig
