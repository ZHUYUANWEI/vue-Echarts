<template>
  <div>
    <h3>请输入用户名：<input v-model="username" @change="setUser"></h3>
  </div>
</template>

<script>
export default {
    data () {
        return {
            username: ''
        }
    },
    methods: {
        setUser () {
            this.$emit('transferUser', this.username)
        }
    }
}
</script>
