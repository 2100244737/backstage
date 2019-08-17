<template>
<basic-container>
  <carry :parameter='parameter' v-if="carryIsShow"></carry>
  <coastal :parameter='parameter' v-if="coastalIsShow"></coastal>
  <navigation :parameter='parameter' v-if="navigationIsShow"></navigation>
  <salvage :parameter='parameter' v-if="salvageIsShow"></salvage>
  <ship :parameter='parameter' v-if="shipIsShow"></ship>
  <towing :parameter='parameter' v-if="towingIsShow"></towing>
  <water :parameter='parameter' v-if="waterIsShow"></water>
</basic-container>
</template>

<script>
  import carry from "../components/matter/carry";  //内河载运活动类型申请
  import coastal from "../components/matter/coastal";  //沿海水域划定活动类型申请
  import navigation from "../components/matter/navigation";  //通航水域岸线安全活动类型申请
  import salvage from "../components/matter/salvage";  //打捞或拆除活动类型申请
  import ship from "../components/matter/ship";  //船舶进入或穿越活动类型申请
  import towing from "../components/matter/towing";  //海上拖带大型设施活动类型申请
  import water from "../components/matter/water";  //水上水下活动类型申请
  export default {
    components: {
      water,
      coastal,
      navigation,
      salvage,
      ship,
      carry,
      towing,
    },
    name: 'index',
    data() {
      return {
        carryIsShow:false,
        coastalIsShow:false,
        navigationIsShow:false,
        salvageIsShow:false,
        shipIsShow:false,
        towingIsShow:false,
        waterIsShow:false,
        parameter:{}
      }
    },
    methods: {
      modelTypeShow(){
        // 相同参数以-num做区分
        this.parameter = this.$route.query;
        this.parameter.modelType = 'JTB15028'
        // 水上水下活动
        if(this.parameter.modelType =='JTB15024-2'){
            this.waterIsShow = true;
        //沿海水域    
        }else if(this.parameter.modelType =='JTB15006'){
            this.coastalIsShow = true;
        //打捞或拆除
        }else if(this.parameter.modelType =='JTB15007'){
            this.salvageIsShow = true;
        //海上拖带大型 
        }else if(this.parameter.modelType =='JTB15041-1'){
            this.towingIsShow = true;
        //船舶进入或穿越 
        }else if(this.parameter.modelType =='JTB15028'){
            this.shipIsShow = true;
        //通航水岸线  ？和水上水下活动一样type
        //通航水岸线
        }else if(this.parameter.modelType =='JTB15024-1'){
            this.navigationIsShow = true;
        //内河载运   
        }else if(this.parameter.modelType =='JTB15041-2'){
            this.carryIsShow = true;
        }
      },

    },
    created() {
      this.modelTypeShow()
      }
  }
</script>

<style scoped="scoped" lang="scss">

</style>
