<template>
<div>
  <div id="KanbanEcharts4" :style="{width: widthDiv ,height: heightDiv + 'px'}"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            widthDiv: '100%'
        }
    },
    props: ['heightDiv'],
    computed: {},
    mounted () {

    },
    methods: {
        drawLine () {
        }
    }
}
</script>

<style>

</style>
