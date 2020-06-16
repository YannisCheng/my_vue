<template>
    <div class="left_div">
        <ol>
            <li style="list-style: none;" v-for="item in leftData" :key="item.type">
                <span style="color: black">{{item.name}}</span>
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
        width: 30%;
    }
</style>