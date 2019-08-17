<template>
  <basic-container class="table-options">
    <h3>我的待办<span>共<em>{{pagination.total}}</em>条</span></h3>
    <div class="business-group">
      <span>业务类型：</span>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="(item,index) in cities" :label="item.type" :key="index">{{item.name}}</el-checkbox>
      </el-checkbox-group>
       <el-checkbox-button :size='size' v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox-button>
    </div>
    <div class="classify-group">
          <div class="group-list">
            <div class="group-list-options">
              <span>状态：</span>
              <el-select :size='size' class="classify-options" v-model="params.applyStatus" placeholder="请选择">
                 <el-option
                    v-for="item in optionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <div class="group-list-options">
              <span class="classify-title">申请编号：</span>
              <el-input class="input classify-input"  :size='size' v-model="params.applyNum" placeholder="请输入申请编号"></el-input>
            </div>
            <div class="group-list-options">
              <span class="classify-title">事项名称：</span>
              <el-input class="input classify-input"  :size='size' v-model="params.projectName" placeholder="请输入事项名称"></el-input>
            </div>
            <div class="group-list-options">
              <span class="classify-title">申请人/申请单位：</span>
              <el-input class="input classify-input-two"  :size='size' v-model="params.applicant" placeholder="请输入申请信息"></el-input>
            </div>
          </div>
          <div class="group-list">
            <div class="group-time">
              <span class="classify-title">申请时间：</span>
              <el-date-picker
                class="classify-options"
                v-model="applyTime"
                type="daterange"
                :size='size'
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
            <div class="group-time">
              <span class="classify-title accept">受理时间：</span>
              <el-date-picker
                class="classify-options"
                v-model="acceptTime"
                type="daterange"
                :size='size'
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
             <el-button @click='getData' :size='size' type="primary">查询</el-button>
             <el-button @click='rest' :size='size' type="primary">重置</el-button>
          </div>
    </div>
    <CommonTable :params="params" :tableHeader="tableHeader" :tableData="tableData" :options="options" :getTableData="getTableData" :pagination="pagination"
      @row-click="handleRowClick" @selection-change="handleSelectionChange" />
  </basic-container>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  import '@/styles/home.scss'
  import CommonTable from "@/components/table/index";
  import {dateFormatDay}  from "../filters/index";
  import {getCommission,getDictionaries} from '@/api/admin/user'
  export default {
    name: 'wel',
    components: {
      CommonTable
    },
    data() {
      return {
        // 全选状态
        checkAll: true,
        // 大小屏适配
        size:(screen.width <=1366)?"mini":"medium",
        // 申请时间
        applyTime: '',
        // 受理时间
        acceptTime: '',
        // 选中数据内容默认全选 类型暂为自己定义有接口后修改
        checkedCities: ['01','02','03','04','05','06','07'],
        // 类型列表
        cities: [
          {name:'通航管理',type:'01'},
          {name:'船舶管理',type:'02'},
          {name:'船员管理',type:'03'},
          {name:'危房管理',type:'04'},
          {name:'安全管理',type:'05'},
          {name:'船检管理',type:'06'},
          {name:'船标管理',type:'07'}
        ],
        // 状态选择框
        optionData: [],
        // 请求参数
        params:{
           applyStatus:'',
           applyNum:'',
           projectName:'',
           applicant:'',
           serveBusiness:'',
           applyStartTime:'',
           applyEndTime:'',
           acceptStartTime:'',
           acceptEndTime:'',
           size:10,
           current:1
        },
        // 表格词典请求参数
        diction:{
          type:'APPLY_STATUS'
        },
        // 表头
        tableHeader: [{
            prop: 'applyNum',
            label: '申请编号',
          },
          {
            prop: 'applicant',
            label: '申请人/申请单位',
            width:150,
          },
          {
            prop: 'applyDate',
            label: '申请日期',
          },
          {
            prop: 'projectName',
            label: '事项名称',
            width:250,
          },
          {
            prop: 'createDate',
            label: '办理期限'
          },
          {
            prop: 'modityDate',
            label: '受理日期'
          },
          {
            prop:'applyStatus',
            label: '状态',
            render: (row, index) => {
              if(row.applyStatus == this.dictionData[index].value){
                return this.dictionData[index].label
              }
            }
          },
          {
            button: true,
            label: '操作',
            group: [{
              name: '处理',
              type: 'primary',
              plain: true,
              onClick: (row, index) => { // 箭头函数写法的 this 代表 Vue 实例
                this.$router.push({
                    path: '/home/accept',
                    query: {
                      modelType:row.modelType,
                      applyStatus:row.applyStatus,
                      windowApplyId: row.windowApplyId
                    }
                })
                
              }
            }, ]
          }
        ],
        // 表格内容
        tableData: [],
        // 字典内容
        dictionData:[],
        // 分页器
        pagination: {
          total: 0,
          page: 1,
          pageSize: 10
        },
        //表格控制项
        options: {
          cellStyle:function (row, column, rowIndex, columnIndex) {
              if(row.column.label === "状态"){
                  return "color:#E60012"
              }
          },
          pagination:true,
          height:(screen.width <=1366)?300:600,
          mutiSelect: false, //是否显示多选
          index: false, // 是否显示序号
          loading: true, // 是否显示表格动画
          initTable: true, // 是否一挂载就加载数据
        }
      }
    },
    methods: {
      // 全选按钮
      handleCheckAllChange(val) {
        const arr =  this.cities;
        if(val){
          this.checkedCities = [];
          arr.forEach((v, i) => {
            this.checkedCities.push(v.type)
          })
        }else{
          this.checkedCities = [];
        }
        this.isIndeterminate = false;
      },
      // 全部选全后 全部按钮点亮
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        // this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      // 控制点击事件的冒泡... 如果点击事件不影响你的点击行事件，可以不传
      handleClick(e, row) {
        e.cancelBubble = true // 停止冒泡，否则会触发 row-click
        console.log(row)
      },
      //请求获取数据
      getTableData() {
        this.options.loading = true
        getCommission(this.params).then((res) => {
        this.tableData = res.data.data.records
        this.pagination.total = res.data.data.total
        this.options.loading = false
        })
      },
      // 字典请求方法
      getDiction(){
         getDictionaries(this.diction).then((res) => {
          this.optionData =  res.data.data.records
          this.dictionData = res.data.data.records
          // console.log( this.dictionData);
        }) 
      },
      // 查询按钮
      getData(){
        this.params.serveBusiness = this.checkedCities.join(",");
        // 根据请求参数新获取数据并渲染到表格
        this.getTableData();
      },
      // 重置按钮
      rest(){
        // 清空请求参数
        this.params = {
           applyStatus:'',
           applyNum:'',
           projectName:'',
           applicant:'',
           serveBusiness:'',
           applyStartTime:'',
           applyEndTime:'',
           acceptStartTime:'',
           acceptEndTime:'',
           size:10,
           current:1
        }
         // 重新获取默认数据
         this.getTableData();
      },
      // 点击行的事件，同理可以绑定其他事件
      handleRowClick(row, event, column) {
        console.log('click row:', row, event, column)
      },
      // 复选框选中 不需要则不用做操作
      handleSelectionChange(selection) {
        console.log(selection)
      }
    },
    created() {
      this.getDiction();
    },
  }
</script>

<style scoped="scoped" lang="scss">
</style>
