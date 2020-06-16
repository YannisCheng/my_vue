<template>
    <div class="right_div">
        <ol>
            <li style="list-style: none;height: 80px" v-for="item in rightData" :key="item.type">
                <div class="right_div_li">
                    <span style="color: black">{{item.name}}</span>
                    <el-divider class="el_divider_class"/>
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "MainRightItem",
        data() {
            return {}
        },
        props: ['rightData']
    }
</script>

<style scoped>
    .right_div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%
    }

    .right_div_li {
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>