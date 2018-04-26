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
    }
}
export default imgConfig
