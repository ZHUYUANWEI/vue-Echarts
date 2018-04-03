<template>
  <div>
    <h3>{{ msg }}333</h3>
    <h3>{{ $store.state.count }}</h3>
    <div>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Welcome test3'
        }
    },
    computed: {
        count () {
            return this.$store.state.count
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
