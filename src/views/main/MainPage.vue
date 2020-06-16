<template>
    <div style="color: white" class="main_div_bg">
        <MainLeftItem :leftData="leftDatas"/>
        <MainRightItem :rightData="rightDatas"/>
    </div>
</template>

<script>
    import MainLeftItem from "@/views/main/MainLeftItem";
    import MainRightItem from "@/views/main/MainRightItem";

    export default {
        name: "main_page",
        components: {MainRightItem, MainLeftItem},
        data() {
            return {
                leftDatas: [
                    {name: '热门', type: 0},
                    {name: '相声评书', type: 1},
                    {name: '头条', type: 2},
                    {name: '商业财经', type: 3},
                    {name: '娱乐', type: 4},
                    {name: '历史', type: 5},
                    {name: '儿童', type: 6},
                    {name: '文学', type: 7}],
                rightDatas: [
                    {name: '郭德纲', type: 0},
                    {name: '辽沈先生', type: 1},
                    {name: '南方周末', type: 2},
                    {name: '头条财经', type: 3},
                    {name: '大理历史', type: 4},
                    {name: '一点咨询', type: 5},
                    {name: '读者', type: 6},
                    {name: '文学', type: 7}],
            }
        },
    }
</script>

<style scoped>
    .main_div_bg {
        display: flex;
        flex-direction: row;
    }
</style>