<template>
    <div class="left_div">
        <ol>
            <li class="left_li" style="list-style: none;height: 40px" v-for="item in leftData" :key="item.type">
                <div class="left_div_li">
                    <span style="color: black">{{item.appliancesName+"-"+item.appliancesCode}}</span>
                    <!--<el-divider class="el_divider_class"/>-->
                </div>
            </li>
        </ol>

    </div>
</template>

<script>
    export default {
        name: "MainLeftItem",
        data() {
            return {}
        },
        props: ['leftData']
    }
</script>

<style scoped>
    .left_div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .left_div_li {
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>