<template>
    <div class="box">
        <h1> 测试 vueUse 的鼠标坐标 </h1>
        <h3> Mouse: {{x}} x {{y}} </h3>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { useMouse } from '@vueuse/core'
    export default defineComponent({
        name: "vueUse",
        setup() {

            const { x,y } = useMouse()

            return {
                x,y
            }
        }
    })
</script>

<style scoped lang="scss">
.box{
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
                    circle at 60% 90%,
                    rgba(46, 103, 161, 1),
                    transparent 60%
    ),
    radial-gradient(
                    circle at 20px 20px,
                    rgba(46, 103, 161, 0.8),
                    transparent 25%
    ),
    #182336;
    color: #fff;
    h1{
        text-align: center;
    }
    h3{
        text-align: center;
    }
}
</style>