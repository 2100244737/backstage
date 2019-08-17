<template>
  <div class="container">
    <!--     2019-8 通航水域岸线安全使用受理详情页-->
     <div class="centre">
       <div class="information">
           <div class="informationLift">
             <p class="text"><span class="textItem">申请单位：</span><span class="textspan"></span></p>
             <p class="text"><span class="textItem">项目名称：</span><span class="textspan"></span></p>
             <p class="text"><span class="textItem">岸线范围：</span><span class="textspan"></span></p>
           </div>
           <div class="informationCentre">
             <p class="text"><span class="textItem">联系人：</span><span class="textspan"></span></p>
             <p class="text"><span class="textItem">岸线类型：</span><span class="textspan"></span></p>
             <p class="text"><span class="textItem">备注：</span><span class="textspan"></span></p>
           </div>
           <div class="informationRight">
             <p class="text"><span class="textItem">联系电话：</span><span class="textspan"></span></p>
             <p class="text"><span class="textItem">岸线用途：</span><span class="textspan"></span></p>
           </div>
       </div>
       <!--     受理的事件详情-开始-->
       <div class="DataBack">
         <el-collapse v-model="activeNames" @change="DataBackChange">
           <div class="application">
             <el-collapse-item class="materials-icon" name="3">
               <template slot="title">
                 申请材料 <span class="time">提交日期: 2019:08:12</span>
               </template>
               <div class="polishingList">
                 <div class="polishingListTitle">
                   <img class="img" src="../../../assets/img/san.png" alt="">
                   <span>项目的批准文件（需办理批准手续的项目）</span>
                 </div>
                 <ul class="polishingMaterial">
                   <li class="MaterialList">相关部门关于使用岸线项目的批准文.doc</li>
                   <li class="MaterialList">相关部门关于使用岸线项目的批准文.doc</li>
                 </ul>
               </div>
               <div class="polishingList">
                 <div class="polishingListTitle">
                   <img class="img" src="../../../assets/img/san.png" alt="">
                   <span>项目的批准文件（需办理批准手续的项目）</span>
                 </div>
                 <ul class="polishingMaterial">
                   <li class="MaterialList">相关部门关于使用岸线项目的批准文.doc</li>
                   <li class="MaterialList">相关部门关于使用岸线项目的批准文.doc</li>
                 </ul>
               </div>
             </el-collapse-item>
           </div>
         </el-collapse>
       </div>
       <!--     受理的事件详情-结束-->
       <!--     受理意见-开始-->
       <div class="opinion">
         <el-collapse  v-model="opinionNames" @change="DataBackChange">
           <div class="shipInformation">
             <el-collapse-item class="accept-icon" name="1">
               <template slot="title">
                 受理意见：
               </template>
               <div class="opinionIist">
                 <div class="result">
                   <span class="text">受理结果:</span>
                   <div class="radio">
                     <el-radio-group v-model="selectivityMessage" @change="radioChang">
                       <el-radio :label="3">受理</el-radio>
                       <el-radio :label="6">不予受理</el-radio>
                       <el-radio :label="9">材料补正</el-radio>
                     </el-radio-group>
                   </div>
                 </div>
                 <div class="suggest">
                   <span class="text">受理意见:</span>
                   <div class="inputText">
                     <el-input
                       type="textarea"
                       :rows="2"
                       placeholder="请输入内容"
                       size="700px"
                       v-model="suggestTextarea">
                     </el-input>
                   </div>
                 </div>
                 <div class="writ">
                   <span class="text">发送文书：</span>
                   <div class="radio">
                     <el-radio-group v-model="writMessage">
                       <el-radio disabled :label="1">海事业务受理通知书</el-radio>
                       <el-radio disabled :label="2">海事业务不予受理通知书</el-radio>
                       <el-radio disabled :label="3">海事业务补正通知书</el-radio>
                     </el-radio-group>
                   </div>
                   <div class="lookOver">
                     <el-button type="text">查看</el-button>
                   </div>
                 </div>
               </div>
               <div class="submitBtn">
                 <el-button type="primary" class="btn" @click="handleSubmit">保存</el-button>
                 <el-button type="primary" class="btn" @click="handleSubmit">提交</el-button>
               </div>
             </el-collapse-item>
           </div>
         </el-collapse>
       </div>
       <!--     受理意见-结束-->
     </div>
  </div>
</template>

<script>
  import {accept, getDictionaries} from '@/api/admin/user'
  export default {
    name: 'index',
    data() {
      return {
        tableData: '',
        isShow: true,
        selectivityMessage: 3,//受理结果单选框
        writMessage: 1, //发送文书单选框
        fillTextarea:'',//受理意见内容
        activeNames:['3'],//展开折叠板
        opinionNames:['1'],
        additionsChecked:[], // 需补正,
        suggestTextarea:'', // 受理意见
        waetr:false,
        textarea: '',
        modelType:'',
        params: {
          // 请求参数
          windowApplyId: null
        },
        globalityData: Object,
        globality: {},
        CententMaterial: null, // 申请材料arr
        CententShips:[], //船舶信息
        devicename:[] // 设备信息
      }
    },
    methods: {
      DataBackChange(val) {
        // 能获取折叠办信息 暂时无用
        console.log(val);
        console.log(this.activeNames);
      },
      radioChang (val) {
       // 受理结果和发送文书同步
        if (val == 3) {
          this.writMessage = 1
        }else if (val == 6){
          this.writMessage = 2
        } else if (val == 9) {
          this.writMessage = 3
        }
      },
      open() {
        this.$confirm('是否忘记什么了？', '提示',{
          confirmButtonText: '确定',
          type: 'warning'
        })
      },

      handleSubmit () {
        // 提交按钮
        // 要进行判定需补办是否选了，选了，受理结果的材料补正是否选了，如果未选不能提交（颜色灰色）有弹框提示，
        if (this.selectivityMessage ==3) {
           if (this.additionsChecked.length!==0) {
             this.open()
           }
          // 把受理信息发送
          console.log('受理信息发送');
        }else if( this.selectivityMessage ==6) {
          if (this.additionsChecked.length!==0) {
            this.open()
          }
          // 把不受理信息发送
          console.log('不受理信息发送');
        } else if (this.selectivityMessage == 9) {
          if(this.additionsChecked.length!==0) {
            console.log('材料补正信息发送');
          } else  {
            // 执行弹框提示
            this.open()
          }
        }
      },
      handleSave(){
        // 保存按钮

      },
      getDataList() {
        this.params.windowApplyId = this.$route.query.windowApplyId
        accept(this.params.windowApplyId).then((res) => {
         this.globalityData =res.data.data
          let  Material = JSON.parse(res.data.data.content)
          this.CententMaterial =Material["申请材料"]
          this.CententShips =Material["船舶信息"]
          this.devicename =Material["设备信息"]
          this.globality =  Material
        })
      }
    },
    created() {
      this.getDataList();
      this.isModelType();
    }
  }
</script>

<style scoped="scoped" lang="scss">
  li {
    list-style: none;
  }
  .container {
    width: 100%;
    /deep/ .el-collapse-item {
      position: relative;
      margin-bottom: 10px;
    }
    /deep/ .el-collapse-item::after {
      content: "";
      left: 0;
      background: url("../../../assets/img/book.png") no-repeat;
      position: absolute;
      top: 10px;
      width: 40px;
      height: 40px;
    }
    /deep/ .materials-icon::after{
      background: url("../../../assets/img/materials-icon.png") no-repeat;
    }
    /deep/ .polishing-icon::after{
      background: url("../../../assets/img/polishing-icon.png") no-repeat;
    }
    /deep/ .accept-icon::after{
      background: url("../../../assets/img/accept-icon.png") no-repeat;
    }
    /deep/ .el-collapse-item__arrow {
      position: relative;
      font-size: 14px;
      top: 15px;
      width: 90px;
      float: right;
    }
    /deep/ .el-collapse-item__header {
      font-size: 22px;
      text-indent: 25px;
      position: relative;
      border-bottom: 2px solid #ddd;
    }
    /deep/ .el-collapse-item__wrap {
      border: none;
    }
    /deep/ .el-collapse-item__header::after {
      content: "";
      left: 0;
      position: absolute;
      bottom: -1px;
      width: 158px;
      height: 3px;
      background: #004098;
    }
    /deep/ .el-icon-arrow-right:before {
      position: absolute;
      left: 60px;
      content: "";
      width: 30px;
      margin-left: 15px;
      height: 30px;
      background: url("../../../assets/img/dow.png") no-repeat;
    }
    /deep/ .el-collapse-item__arrow.is-active {
      transform: rotate(0deg);
    }
    /deep/ .el-collapse-item__arrow::after {
      content: "展开";
      color: #2b84ff;
      position: absolute;
      left: 0;
    }
    /deep/ .el-collapse-item__arrow.is-active::after {
      content: "收起";
      color: #2b84ff;
    }
    /deep/ .el-icon-arrow-right.is-active:before {
      content: "";
      background: url("../../../assets/img/jianjao.png") no-repeat;
    }
    /deep/ .el-collapse{
      border: none;
    }
    .shipList{
      /deep/.el-collapse{
        border: none;
      }
      /deep/ .el-collapse-item::after {
        background: transparent !important;
        content: '';
        width: 0;
        height: 0;
      }
      /deep/  .el-collapse-item__header::after{
        width: 80px;
      }
      /deep/ .el-collapse-item__header::after{
        height: 2px;
      }
      /deep/ .el-collapse-item__header{
        border: 1px;
        font-size: 20px;
        text-indent: 0;
      }
      /deep/ .el-collapse-item__arrow::after{
        left: 25px;
      }
      /deep/ .el-collapse-item__header::after{
        width: 80px;
      }
    }
    .centre {
      padding: 40px 0;
      .information {
        color: #000000;
        font-size: 15px;
        .informationLift {
          vertical-align: top;
          display: inline-block;
          width: 33%;
          .text {
            margin: 0;
            margin-bottom: 20px;
            .textItem{
              display: inline-block;
              width: 177px;
              text-align: right;
            }
          }
        }
        .informationCentre {
          vertical-align: top;
          display: inline-block;
          width: 33%;
          .text {
            margin: 0;
            margin-bottom: 20px;
            .textItem{
              display: inline-block;
              width: 177px;
              text-align: right;
            }
          }
        }
        .informationRight {
          vertical-align: top;
          display: inline-block;
          width: 33%;
          .text {
            margin: 0;
            margin-bottom: 20px;
            .textItem{
              display: inline-block;
              width: 177px;
              text-align: right;
            }
          }
        }
      }
      .DataBack {
        margin-top: 40px;
        .application {
          position: relative;
          .time {
            font-size: 15px;
            margin-left: 8px;
            color: #333333;
          }
           .polishingList {
            width: 1100px;
            margin: 0 auto;
             margin-top: 30px;
            font-size: 15px;
            margin-bottom: 10px;
            border: 1px solid #DDDDDD;
            color: #333333;
            .polishingListTitle {
              height: 58px;
              line-height: 58px;
              background: #E4EAF7;
              font-size: 15px;
              color: #333333;
              .img {
                display: inline-block;
                width: 8px;
                height: 14px;
                margin-left: 16px;
                margin-right: 8px;
              }
            }
            .polishingMaterial {
              margin: 0;
              padding-left:  31px;
              border-top: 1px solid #DDDDDD;
              .MaterialList {
                color: #2B84FF;
                margin: 20px 0;
                list-style: disc;
              }
            }
          }
        }
      }
      .opinion {
        .opinionHeader {
          position: relative;
          padding-bottom: 13px;
          font-size:22px;
          font-weight:400;
          color:rgba(51,51,51,1);
          border-bottom: 1px solid #DDDDDD;
          margin-bottom:  30px;
          .opinionRight {
            display: inline-block;
            position: absolute;
            right: 5px;
            font-size: 15px;
            color: #2B84FF;
            .imgall {
              margin-left: 7px;
              margin-top: 5px;
              display: inline-block;
            }
          }
          &::after {
            position: absolute;
            left: 0;
            bottom: -2px;
            content: ' ';
            width: 139px;
            height: 2px;
            background: #004098;
          }
        }
        .opinionIist {
          width: 1000px;
          margin: 0 auto;
          margin-top: 30px;
          padding: 20px 105px;
          box-sizing: border-box;
          border: 1px solid #DDDDDD;
          .result {
            margin-bottom: 30px;
            .text {
              margin-right: 32px;
            }
            .radio {
              display: inline-block;
            }
          }
          .suggest {
            margin-bottom: 30px;

            .text {
              display: inline-block;
              vertical-align:top;
              margin-right: 20px;
            }
            .inputText  {
              display: inline-block;
              width: 600px;
              height: 150px;
              /deep/.el-textarea {
                height: 150px;
                /deep/.el-textarea__inner {
                  height: 150px;
                }
              }
            }
          }
          .writ {
            .text {
              margin-right: 30px;
            }
            .radio{
              display: inline-block;
              margin-right: 30px;
            }
            .lookOver {
              display: inline-block;
            }
          }
        }
        .submitBtn {
          margin-top: 41px;
          font-size: 16px;
          .btn {
            background: #2B84FF;
            width:143px;
            height:40px;
            margin-right: 10px;
          }
          text-align: center;
        }
      }
    }
  }
</style>
