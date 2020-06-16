<template>
    <div class="left_div">
        <ol>
            <li class="left_li" style="list-style: none;height: 40px" v-for="(item) of leftData" :key="item.pid">
                <div class="left_div_li">
                    <!--遍历对象：对象的每一个元素都是一条单独的数据展示-->
                    <span style="color: black">{{item}}</span>
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
        props: ['leftData']
    }
</script>

<style scoped>

</style>