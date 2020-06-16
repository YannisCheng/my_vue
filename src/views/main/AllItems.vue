<template>
    <div class="left_div">
        <ol>
            <li class="left_li" style="list-style: none;height: 40px" v-for="(item) of datas" :key="item.pid">
                <div class="left_div_li">
                    <span style="color: black">{{item.appliancesName}}</span>
                </div>
            </li>
        </ol>

    </div>
</template>

<script>
    export default {
        name: "AllItems",
        data() {
            return {}
        },
        props: ['datas']
    }
</script>

<style scoped>
    .left_div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
    }

    .left_div_li {
        height: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>