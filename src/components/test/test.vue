<template>
  <div style="text-align: left;margin: 0 auto;max-width: 1000px;">
    <Test1 :projectId="projectIds"></Test1>
    <Test2 @transferUser="getUser"></Test2>
    <h3>用户名为：{{user}}</h3>
    <Test3></Test3>
  </div>
</template>

<script>
import Test1 from './component/test1'
import Test2 from './component/test2'
import Test3 from './component/test3'

export default {
    name: 'test',
    data () {
        return {
            projectIds: '1234567899',
            user: ''
        }
    },
    methods: {
        getUser (msg) {
            this.user = msg
        }
    },
    components: {
        Test1,
        Test2,
        Test3
    }
}
</script>

<style>
</style>
