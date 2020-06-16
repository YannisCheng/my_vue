<template>
    <div class="single_div">
        <ol>
            <li class="left_li" style="list-style: none;height: 40px" v-for="(value, name, index) of singleData" :key="value.pid">
                <div class="single_div_li">
                    <!--遍历对象：对象的每一个元素都是一条单独的数据展示-->
                    <span style="color: black">{{ index }}. {{ name }}: {{ value }}</span>
                </div>
            </li>
        </ol>

    </div>
</template>

<script>
    export default {
        name: "ShowSingleObject",
        data() {
            return {}
        },
        props: ['singleData']
    }
</script>

<style scoped>
    .single_div {
        background: antiquewhite;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
    }

    .single_div_li {
        height: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>