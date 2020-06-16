<template>
    <div class="right_div">
        <ol>
            <li style="list-style: none;" v-for="item in rightData" :key="item.type">
                <span style="color: black">{{item.name}}</span>
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
</style>