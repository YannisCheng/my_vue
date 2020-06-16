<template>
    <div style="color: white" class="main_div_bg">
        <MainLeftItem :leftData="leftDatas"/>
        <!--<MainRightItem :rightData="rightDatas"/>-->
    </div>
</template>

<script>
    import MainLeftItem from "@/views/main/MainLeftItem";
    /*import MainRightItem from "@/views/main/MainRightItem";*/
    import httpService from '@/net/http'
    //import axios from 'axios'

    export default {
        name: "main_page",
        components: {/*MainRightItem, */MainLeftItem},
        data() {
            return {
                leftDatas: [],
                rightDatas: [
                    /*{name: '郭德纲', type: 0},
                    {name: '辽沈先生', type: 1},
                    {name: '南方周末', type: 2},
                    {name: '头条财经', type: 3},
                    {name: '大理历史', type: 4},
                    {name: '一点咨询', type: 5},
                    {name: '读者', type: 6},
                    {name: '文学', type: 7}*/],
                result: '',
            }
        },

        created: function () {
            // `this` 指向 vm 实例
            console.log('a is: ' + this.a)
        },

        mounted(){
            this.getData()
        },

        methods: {

            getData() {
                httpService.get('facility/over/status_list_details?page=1&limit=10000&departmentId=713023015&appliancesClassific=3').then(
                    (resp) =>{
                    window.console.log(resp.data);
                    if (resp.code === 0) {
                        alert(resp.msg)
                        this.leftDatas = resp.data[4]
                        console.log(this.leftDatas[1])
                    } else {
                        alert(resp.msg)
                    }
                }).catch(error => {
                    if (error.response) {
                        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                    const CancelToken = httpService.CancelToken;
                    const source = CancelToken.source();
                    source.cancel
                });
            }
        },

        method: {},
    }
</script>

<style scoped>
    .main_div_bg {
        display: flex;
        flex-direction: row;
    }
</style>