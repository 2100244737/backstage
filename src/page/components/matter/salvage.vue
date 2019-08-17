<template>
  <div class="container">
    <!--     2019-8 海上拖带大型设施...受理详情页-->
    <div class="centre">
      <div class="information">
        <div class="informationLift">
             <p class="text"><span class="textItem">申请编号：</span><span class="textspan">{{globalityData['applyNum']}}</span></p>
             <p class="text"><span class="textItem">申请日期：</span><span class="textspan">{{globalityData['applyDate']}}</span></p>
             <p class="text"><span class="textItem">受理机构：</span><span class="textspan">{{globalityData['mechanism']}}</span></p>
             <p class="text"><span class="textItem">机构地址：</span><span class="textspan">{{globality['机构地址']}}</span></p>
             <p class="text"><span class="textItem">范围地点：</span><span class="textspan">{{globality['范围地点']}}</span></p>
             <p class="text"><span class="textItem">代理人：</span><span class="textspan">{{globality['代理人']}}</span></p>
           </div>
           <div class="informationCentre">
             <p class="text"><span class="textItem">申请机构类型：</span><span class="textspan">{{globality['申请机构类型']}}</span></p>
             <p class="text"><span class="textItem">申请机构名称：</span><span class="textspan">{{globality['申请机构名称']}}</span></p>
             <p class="text"><span class="textItem">项目名称：</span><span class="textspan">{{globalityData['projectName']}}</span></p>
             <p class="text"><span class="textItem">领取方式：</span><span class="textspan">{{globalityData['receiveType']}}</span></p>
             <p class="text"><span class="textItem">活动主办单位/施工单位 ：</span><span class="textspan">{{globality['活动主办单位/施工单位']}}</span></p>
             <p class="text"><span class="textItem">备注：</span><span class="textspan">{{globalityData['remark']}}</span></p>
           </div>
           <div class="informationRight">
             <p class="text"><span class="textItem">联系人：</span><span class="textspan">{{globalityData['userName']}}</span></p>
             <p class="text"><span class="textItem">联系电话：</span><span class="textspan">{{globalityData['phoneNum']}}</span></p>
             <p class="text"><span class="textItem">活动开始日期：</span><span class="textspan">{{globality['活动开始日期']}}</span></p>
             <p class="text"><span class="textItem">预计活动结束日期：</span><span class="textspan">{{globality['预计活动结束日期']}}</span></p>
             <p class="text"><span class="textItem">建设单位：</span><span class="textspan">{{globality['建设单位']}}</span></p>
           </div>
      </div>
      <!--     受理的事件详情-开始-->
      <div class="DataBack">
        <el-collapse v-model="foldData" @change="handleChange">
          <el-collapse-item title="船舶信息" name="1">
            <div class="applicationData" v-for="(item,index) in CententShips">
              <el-collapse class="shipList" v-model="shipList" @change="handleChange">
                <el-collapse-item :name="index">
                  <template slot="title">{{item['船名']}}</template>
                  <div class="applicationMatter">
                      <div class="system">
                        <div class="systemLeft">
                          <p class="text">
                            <span class="textItem">船名：</span>
                            <span class="textspan">{{item['船名']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">AIS：</span>
                            <span class="textspan">{{item['AIS']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">建造完工日期：</span>
                            <span>{{item['建造完工日期']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">所有人：</span>
                            <span>{{item['所有人']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">主机功率：</span>
                            <span>{{item['主机功率']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">型深：</span>
                            <span>{{item['型深']}}</span>
                          </p>
                        </div>
                        <div class="systemCentre">
                          <p class="text">
                            <span class="textItem">船检编号：</span>
                            <span>{{item['船检编号']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">船舶类型：</span>
                            <span>{{item['船舶类型']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">改建完工日期:</span>
                            <span>{{item['改建完工日期']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">总吨：</span>
                            <span>{{item['总吨']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">总长：</span>
                            <span>{{item['总长']}}</span>
                          </p>
                        </div>
                        <div class="systemRight">
                          <p class="text">
                            <span class="textItem">船籍港（国籍）：</span>
                            <span>{{item['船籍港（国籍）']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">航区：</span>
                            <span>{{item['船区']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">经营人：</span>
                            <span>{{item['经营人']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">净吨：</span>
                            <span>{{item['净吨']}}</span>
                          </p>
                          <p class="text">
                            <span class="textItem">型宽：</span>
                            <span>{{item['型宽']}}</span>
                          </p>
                        </div>
                      </div>
                      <div class="tableShip">
                        <div class="tableTitle">
                          <span>船舶证书</span>
                        </div>
                        <el-table :data="item['船舶证书']" stripe border>
                          <el-table-column prop="证书名称" label="证书名称" width="180"></el-table-column>
                          <el-table-column prop="name" label="证日期" width="180"></el-table-column>
                          <el-table-column prop="address" label="有效期"></el-table-column>
                          <el-table-column prop="address" label="最近一次检查日期"></el-table-column>
                          <el-table-column prop="address" label="备注"></el-table-column>
                        </el-table>
                      </div>
                      <div class="seaman">
                        <div class="tableTitle">
                          <span>船员证书</span>
                        </div>
                        <el-table :data="item['船员证书']" stripe border>
                          <el-table-column prop="证书名称" label="证书名称" width="180"></el-table-column>
                          <el-table-column prop="name" label="证日期" width="180"></el-table-column>
                          <el-table-column prop="address" label="有效期"></el-table-column>
                          <el-table-column prop="address" label="最近一次检查日期"></el-table-column>
                          <el-table-column prop="address" label="备注"></el-table-column>
                        </el-table>
                      </div>
                    </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-collapse-item>
          <el-collapse-item class="devicename"  title="设备信息" name="2">
            <div class="deviceNameList" v-for="itemName in devicename">
              <p class="deviceList">
                <span>设备名称：</span>
                <span>{{itemName['设备名称']}}</span>
              </p>
              <p class="parameter">
                <span>主要技术参数：</span>
                <span>{{itemName['主要技术参数']}}</span>
              </p>
            </div>
          </el-collapse-item>
        </el-collapse>
        <el-collapse  v-model="activeNames" @change="DataBackChange">
          <div class="application">
            <el-collapse-item class="materials-icon" name="1">
              <template slot="title">
                申请材料
                <span class="time">提交日期: 2019:08:12</span>
              </template>
              <div class="applicationList">
                  <div class="theme">
                    <div class="themeHeader">
                      <p class="headline">打捞单位资质证明文件</p>
                    </div>
                    <div class="fill">
                      <el-input type="textarea" :rows="2" placeholder="请填写备注" v-model="fillTextarea"></el-input>
                    </div>
                  </div>
                  <div class="theme">
                    <div class="themeHeader">
                      <p class="headline">打捞合同（协议）</p>
                    </div>
                    <div class="fill">
                      <el-input type="textarea" :rows="2" placeholder="请填写备注" v-model="fillTextarea"></el-input>
                    </div>
                  </div>
                  <div class="theme">
                    <div class="themeHeader">
                      <p class="headline">打捞作业方案</p>
                    </div>
                    <div class="fill">
                      <el-input type="textarea" :rows="2" placeholder="请填写备注" v-model="fillTextarea"></el-input>
                    </div>
                  </div>
                  <div class="theme">
                    <div class="themeHeader">
                      <p class="headline">沉船所有权证书或相关证明</p>
                    </div>
                    <div class="fill">
                      <el-input type="textarea" :rows="2" placeholder="请填写备注" v-model="fillTextarea"></el-input>
                    </div>
                  </div>
                  <div class="theme">
                    <div class="themeHeader">
                      <p class="headline">已通过评审的通航安全评估报告（对通航安全、防治船舶污染可能构成重大的影响的）</p>
                    </div>
                    <div class="fill">
                      <el-input type="textarea" :rows="2" placeholder="请填写备注" v-model="fillTextarea"></el-input>
                    </div>
                  </div>
                  <div class="theme">
                    <div class="themeHeader">
                      <p class="headline">航行通（告）警发布申请</p>
                    </div>
                    <div class="fill">
                      <el-input type="textarea" :rows="2" placeholder="请填写备注" v-model="fillTextarea"></el-input>
                    </div>
                  </div>
                  <div class="theme">
                    <div class="themeHeader">
                      <p class="headline">文物行政主管部门的批准文件（打捞文物时）</p>
                    </div>
                    <div class="fill">
                      <el-input type="textarea" :rows="2" placeholder="请填写备注" v-model="fillTextarea"></el-input>
                    </div>
                  </div>
              </div>
              <!-- <div class="applicationList" v-for="item in CententMaterial">
                <div class="theme">
                  <div class="themeHeader">
                    <p class="headline">{{item['申请材料类型']}}</p>
                  </div>
                  <div class="materials">
                    <el-button
                      type="text"
                      v-for="itmes in item['申请材料']"
                      class="paper"
                    >{{itmes.fileName}}</el-button>
                  </div>
                  <div class="fill">
                    <el-input type="textarea" :rows="2" placeholder="请填写备注" v-model="fillTextarea"></el-input>
                  </div>
                </div>
              </div> -->
            </el-collapse-item>
            <el-collapse-item class="polishing-icon" name="2">
              <template slot="title">
                材料补齐
                <span class="time"></span>
              </template>
              <div class="polishing">
                <div class="polishingList">
                  <div class="polishingListTitle">
                    <img src="../../../assets/img/san.png" alt />
                    <span>项目的批准文件（需办理批准手续的项目</span>
                    <div class="checkBox">
                      <el-checkbox :label="1" v-model="additionsChecked">需补正</el-checkbox>
                    </div>
                  </div>
                  <ul class="polishingMaterial">
                    <li class="MaterialList">相关部门关于使用岸线项目的批准文.doc</li>
                    <li class="MaterialList">相关部门关于使用岸线项目的批准文.doc</li>
                  </ul>
                  <el-input type="textarea" :rows="2" placeholder="请填写备注" v-model="textarea"></el-input>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item class="accept-icon" name="3">
              <!--     受理意见-开始-->
              <template slot="title">
                受理意见
                <span class="time"></span>
              </template>
              <div class="opinion">
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
                        v-model="suggestTextarea"
                      ></el-input>
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
                  <el-button type="primary" @click="handleSubmit">保存</el-button>
                  <el-button type="primary" @click="handleSubmit">提交</el-button>
                </div>
              </div>
              <!--     受理意见-结束-->
            </el-collapse-item>
          </div>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { accept, getDictionaries } from "@/api/admin/user";
export default {
  name: "index",
  data() {
    return {
      tableData: "",
      isShow: true,
      shipList:[],
      descrText: "展开",
      foldData: ["1", "2"],
      selectivityMessage: 3, //受理结果单选框
      writMessage: 1, //发送文书单选框
      fillTextarea: "", //受理意见内容
      activeNames: ["1", "2", "3"], //展开第三个折叠板
      additionsChecked: [], // 需补正,
      suggestTextarea: "", // 受理意见
      waetr: false,
      textarea: "",
      modelType: "",
      params: {
        // 请求参数
        windowApplyId: null
      },
      globalityData: Object,
      globality: {},
      CententMaterial: null, // 申请材料arr
      CententShips: [], //船舶信息
      devicename: [] // 设备信息
    };
  },
  methods: {
    // 折叠栏
    handleChange() {},
    DataBackChange(val) {
      // 能获取折叠办信息 暂时无用
      console.log(val);
      // console.log(this.activeNames);
    },
    radioChang(val) {
      // 受理结果和发送文书同步
      if (val == 3) {
        this.writMessage = 1;
      } else if (val == 6) {
        this.writMessage = 2;
      } else if (val == 9) {
        this.writMessage = 3;
      }
    },
    open() {
      this.$confirm("是否忘记什么了？", "提示", {
        confirmButtonText: "确定",
        type: "warning"
      });
    },

    handleSubmit() {
      // 提交按钮
      // 要进行判定需补办是否选了，选了，受理结果的材料补正是否选了，如果未选不能提交（颜色灰色）有弹框提示，
      if (this.selectivityMessage == 3) {
        if (this.additionsChecked.length !== 0) {
          this.open();
        }
        // 把受理信息发送
        console.log("受理信息发送");
      } else if (this.selectivityMessage == 6) {
        if (this.additionsChecked.length !== 0) {
          this.open();
        }
        // 把不受理信息发送
        console.log("不受理信息发送");
      } else if (this.selectivityMessage == 9) {
        if (this.additionsChecked.length !== 0) {
          console.log("材料补正信息发送");
        } else {
          // 执行弹框提示
          this.open();
        }
      }
    },
    handleSave() {
      // 保存按钮
    },
    isModelType() {
      this.modelType = this.$route.query.modelType;
      if (this.modelType == "JTB15024") {
        this.waetr = true;
      } else if (this.modelType == "JTB15007") {
      }
    },
    getJudge() {
      // const data = {
      //   type:'MODEL_TYPE'
      // }
      // var dataList = [];
      // getDictionaries(data).then((res) => {
      //       dataList = res.data.data.records
      //       dataList.forEach((v, i) => {
      //         if(v.value == this.modelType){
      //             console.log(v.value)
      //         }
      //       })
      // })
    },
    getDataList() {
      this.params.windowApplyId = this.$route.query.windowApplyId;
      accept(this.params.windowApplyId).then(res => {
        this.globalityData = res.data.data;
        let Material = JSON.parse(res.data.data.content);
        this.CententMaterial = Material["申请材料"];
        this.CententShips = Material["船舶信息"];
        this.devicename = Material["设备信息"];
        this.globality = Material;
        console.log(Material, "111");
      });
    }
  },
  created() {
    this.getDataList();
    // this.getJudge();
    this.isModelType();
  }
};
</script>

<style scoped="scoped" lang="scss">
li {
  list-style: none;
}
.container {
  
  /deep/ .el-collapse-item {
    position: relative;
    margin-bottom: 10px;
  }
  /deep/ .el-collapse-item::after {
    content: "";
    left: 0px;
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
    left: 0px;
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
  width: 100%;
  .centre {
    padding: 40px 20px;
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
          .textItem {
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
          .textItem {
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
          .textItem {
            display: inline-block;
            width: 177px;
            text-align: right;
          }
        }
      }
    }
    .DataBack {
      .applicationData {
        .titletheme {
          position: relative;
          padding-bottom: 13px;
          font-size: 22px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          border-bottom: 1px solid #dddddd;
          .imageTitle {
            position: relative;
            top: 5px;
            width: 21px;
            margin-right: 12px;
            height: 25px;
          }
          .applicationRight {
            display: inline-block;
            position: absolute;
            right: 5px;
            font-size: 15px;
            color: #2b84ff;
            .imgall {
              margin-left: 7px;
              display: inline-block;
              margin-top: 5px;
            }
          }
          &::after {
            position: absolute;
            left: 0;
            bottom: -2px;
            content: " ";
            width: 139px;
            height: 2px;
            background: #004098;
          }
        }
        .applicationMatter {
          width: 1000px;
          margin: 0 auto;
          .system {
            color: #000000;
            font-size: 15px;

            .systemLeft {
              vertical-align: top;
              display: inline-block;
              width: 33%;
              .text {
                margin: 0;
                margin-top: 20px;
                margin-bottom: 20px;
                .textItem {
                  display: inline-block;
                  width: 120px;
                  text-align: right;
                }
              }
            }
            .systemCentre {
              vertical-align: top;
              display: inline-block;
              width: 33%;
              .text {
                margin: 0;
                margin-top: 20px;
                margin-bottom: 20px;
                .textItem {
                  display: inline-block;
                  width: 120px;
                  text-align: right;
                }
              }
            }
            .systemRight {
              vertical-align: top;
              display: inline-block;
              width: 33%;
              .text {
                margin: 0;
                margin-top: 20px;
                margin-bottom: 20px;
                .textItem {
                  display: inline-block;
                  width: 120px;
                  text-align: right;
                }
              }
            }
          }
          .tableTitle {
            position: relative;
            font-size: 18px;
            color: #333333;
            height: 20px;
            padding-bottom: 13px;
            border-bottom: 1px solid #dddddd;
            margin-bottom: 29px;
            &::after {
              position: absolute;
              left: 0;
              bottom: -2px;
              content: " ";
              width: 106px;
              height: 2px;
              background: #004098;
            }
          }
          .seaman {
            margin-top: 20px;
          }
          .systemDetails {
            .line {
              padding: 30px 0;
              margin-top: 30px;
              border-top: 1px solid #dddddd;
              width: 100%;
              .shipName {
                text-align: center;
                width: 30%;
                display: inline-block;
              }
              .shipnumber {
                text-align: center;
                width: 30%;
                display: inline-block;
              }
              .shipNationality {
                width: 30%;
                text-align: center;
                display: inline-block;
              }
            }
          }
        }
      }
      .devicename {
        .devicenameTitle {
          position: relative;
          padding-bottom: 13px;
          font-size: 22px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          border-bottom: 1px solid #dddddd;
          .devicenameRight {
            display: inline-block;
            position: absolute;
            right: 5px;
            font-size: 15px;
            color: #2b84ff;
            .imgall {
              margin-left: 7px;
              display: inline-block;
              margin-top: 5px;
            }
          }
          &::after {
            position: absolute;
            left: 0;
            bottom: -2px;
            content: " ";
            width: 139px;
            height: 2px;
            background: #004098;
          }
        }
        .deviceNameList {
          width: 1000px;
          margin: 0 auto;
          display: inline-block;
          .deviceList {
            display: inline-block;
            margin-right: 256px;
            margin-left: 215px;
          }
          .parameter {
            display: inline-block;
          }
        }
      }
      .polishing {
        .headline {
          position: relative;
          padding-bottom: 13px;
          font-size: 22px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 30px;
          border-bottom: 1px solid #dddddd;
          .headlineRight {
            display: inline-block;
            position: absolute;
            right: 5px;
            font-size: 15px;
            color: #2b84ff;
            .headlineImg {
              margin-left: 7px;
              display: inline-block;
              margin-top: 5px;
            }
          }
          &::after {
            position: absolute;
            left: 0;
            bottom: -2px;
            content: " ";
            width: 139px;
            height: 2px;
            background: #004098;
          }
        }
        .polishingList {
          width: 1000px;
          margin: 0 auto;
          font-size: 15px;
          margin-bottom: 10px;
          border: 1px solid #dddddd;
          color: #333333;
          .polishingListTitle {
            height: 58px;
            line-height: 58px;
            background: #e4eaf7;
            .checkBox {
              display: inline-block;
            }
          }
          /deep/.el-textarea__inner {
            height: 150px;
          }
          .polishingMaterial {
            margin: 0;
            border-top: 1px solid #dddddd;
            .MaterialList {
              color: #2b84ff;
              margin: 17px 29px;
            }
          }
        }
      }
      .application {
        position: relative;
        .applicationList {
          border: 1px solid #dddddd;
          .theme {
            .themeHeader {
              height: 33px;
              line-height: 33px;
              border-bottom: 1px solid #dddddd;
              .headline {
                margin: 0;
                padding: 0;
                display: inline-block;
              }
              .checkBox {
                /*vertical-align:;*/
                display: inline-block;
              }
            }
            .materials {
              /deep/.el-button + .el-button {
                margin-left: 0;
              }
              .paper {
                width: 100%;
                text-align: center;
              }
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
