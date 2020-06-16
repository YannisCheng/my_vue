<template>
    <div id="to_ximalaya">
        <div id="div_one" @click="toMainIndex" class="div_basic" style="color: black">去主页</div>
        <div id="div_two" class="div_basic" style="color: black"> 暂无 </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{}
        },
        methods: {
            toMainIndex() {
                this.$router.push({ name: 'main' })
            }
        }
    }
</script>

<style scoped>
    .div_basic {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        width: 100%;
        border: 2px;
        height: 70px;
        background: lightgrey;
    }
</style>