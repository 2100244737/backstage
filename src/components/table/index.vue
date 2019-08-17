<template>
<div class="common-table">
  <el-table
      v-loading="options.loading"
      :height='options.height'
      :data="tableData"
      :max-height="options.maxHeight"
      :stripe="options.stripe"
      :border="options.border"
      :cell-style='options.cellStyle'
      @row-click="handleRowClick"
      @selection-change="handleSelectionChange"
      header-row-class-name="table-header-row">
      <!-- 复选框 -->
      <el-table-column v-if="options.mutiSelect"  width="" type="selection" align="center"></el-table-column>
      <!-- index序号 -->
      <el-table-column v-if="options.index" width="" label="序号" type="index" :index="indexMethod" align="center"></el-table-column>
      <!--数据列表-->
      <template v-for="(column, index) in tableHeader">
        <el-table-column
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :show-overflow-tooltip="true"
          :align="column.align||'center'"
          :width="column.width"
          :fixed="column.fixed">
          <template slot-scope="scope">
            <template v-if="!column.render">
              {{scope.row[column.prop]}}
            </template>

             <!-- render -->
            <template v-else>
              <RenderDom :row="scope.row" :index="index" :render="column.render" />
            </template>
            
            <!-- render button -->
            <template v-if="column.button">
              <template v-for="(btn, i) in column.group">
                <el-button
                  :key="i"
                  :type="btn.type" :size="btn.size || 'mini'" :icon="btn.icon" :disabled="btn.disabled" :plain="btn.plain"
                   @click.stop="btn.onClick(scope.row, scope.$index)"
                  >{{btn.name}}</el-button>
              </template>
            </template>
            <!-- slot 可配置其他常用项 -->
          </template>

        </el-table-column>
      </template>
    </el-table>
     <!-- 分页配置 -->
    <el-pagination
        v-if="options.pagination"
        :total="pagination.total"
        :page-sizes="[10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleIndexChange"
        prev-text="上一页"
        next-text="下一页"
        style="margin-top: 15px;text-align: center"
    ></el-pagination>

</div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'Table',
    components: {
      RenderDom: {
        functional: true, // 函数式组件 - 无 data 和 this 上下文 => better render
        props: {
          row: Object,
          index: Number,
          render: Function
        },
        render(num, element){
          const { row, index } = element.props
          return element.props.render(row, index)
        }
      }
    },
    props:{
      tableData: Array,             //表格数据
      options: Object,              //表格参数控制 maxHeight、stripe 等
      tableHeader: Array,           //表头参数
      params:Object,                //请求参数 分页 size等
      getTableData: Function,       //请求数据的函数
      pagination: Object            //分页，不传则不显示
    },
    created() {
      // 传入的options覆盖默认设置
      this.$parent.options = Object.assign({
          maxHeight: 500, //最大高度
          stripe: true,   //是否为斑马纹
          border: true    //是否带有纵向边框
      }, this.options)
      this.options.initTable && this.getTableData()
    },
    methods: {
      // 切换每页显示的数量
      handleSizeChange(size) {
        this.params.size = size
        this.getTableData()
      },
      // index递加
      indexMethod(index){
        return (this.params.current-1)*this.params.size+index+1;
      },
      // 切换页码
      handleIndexChange(current) {
        this.params.current = current
        this.getTableData()
      },
      handleSelectionChange(selection) {
        this.$emit('selection-change', selection)
      },
      // 点击列表的事件
      handleRowClick(row, event, column) {
        this.$emit('row-click', row, event, column)
      },
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .common-table{
     /deep/ .el-table .cell{
       white-space:nowrap;
       overflow:hidden;
       text-overflow:ellipsis;
    }
     /deep/ .el-pagination{
      font-weight: normal;
    }
     /deep/  .el-table thead{
       color: #555;
       font-weight: normal;
       font-size: 15px;
    }
     /deep/  .el-table{
      color: #4D4D4D;
    }
     /deep/ .el-pagination__total{
      color: #4D4D4D;
    }
     /deep/ .el-pagination{
       color: #4D4D4D;
    }
  }
</style>
