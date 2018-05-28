<template>
    <div class="parkManageDeviceR">
        <ul>
            <li>
                <div class="title">园区人流量峰值时间</div>
                <div class="peopleBox">
                    <img class="icon" :src="peakTime" alt="">
                    <span>{{peakCountTime}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import config from './../common/config/config.js'
export default {
    data () {
        return {
            peakCountTime: '00:00', // 园区峰值时间
            peakTime: config.imgConfig.peakTime
        }
    },
    mounted () {
        this.getaxios()
        setInterval(this.getaxios, 900000) // 15min轮询
    },
    methods: {
        getaxios () {
            this.$axios.get(config.apiConfig.getPeopleNumber)
                .then(res => {
                    console.log('成功——人流量', res)
                    this.peakCountTime = res.data.data[0].peakCountTime
                })
                .catch(err => {
                    console.log('失败——人流量', err)
                })
        }
    }
}
</script>
<style>
.parkManageDeviceR{
    width: 100%;
    height: 100%;
    color: #fff;
}

.parkManageDeviceR ul{
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
}
.parkManageDeviceR ul li{
    list-style: none;
    width: 100%;
    height: 100%;
    border: 1px solid rgb(167, 165, 165);
}

.title{
    text-align: left;
    margin: 5px 10px;
}

.peopleBox{
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 0 10px 10px;
}

.peopleBox .icon{
    width: 30px;
    height: 30px;
}

.peopleBox span{
    display: inline-block;
    margin-left: 15px;
}
</style>
