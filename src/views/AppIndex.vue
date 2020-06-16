<template>
    <div id="to_ximalaya">
        <div id="div_one" @click="toMainIndex" class="div_basic" style="color: white"> 跳转至——玛雅听声</div>
        <div id="div_two" class="div_basic" style="color: white"> 暂无</div>
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
                let url = this.$router.resolve('main_page')
                window.open(url.href,'_blank')
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
        background: #20a0ff;
    }
</style>