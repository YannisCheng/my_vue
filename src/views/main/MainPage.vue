<template>
  <div class="main_div_bg" style="color: white">
    <AllItems :datas="allData"/>
    <ShowSingleObject :singleData="allData[0]"/>
  </div>
</template>

<script>
import ShowSingleObject from '@/views/main/ShowSingleObject'
import AllItems from '@/views/main/AllItems'
import httpService from '@/net/http'

export default {
  name: 'main_page',
  components: { AllItems, ShowSingleObject },
  data () {
    return {
      allData: [],
    }
  },

  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  },

  mounted () {
    this.getData()
  },

  methods: {

    getData () {
      httpService.get('facility/over/status_list_details?page=1&limit=10000&departmentId=713023015&appliancesClassific=3').then(
        (resp) => {
          window.console.log(resp.data)
          if (resp.code === 0) {
            //alert(resp.msg)
            this.allData = resp.data
            console.log(this.allData[1])
          } else {
            //alert(resp.msg)
          }
        }).catch(error => {
        if (error.response) {
          // 请求已发出，但服务器响应的状态码不在 2xx 范围内
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
        /*const CancelToken = httpService.CancelToken;
        const source = CancelToken.source();
        source.cancel*/
      })
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