/*
 *    Copyright (c) 2018-2025, wangdong All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: wangdong
 */

export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  editBtn: false,
  delBtn: false,
  addBtn: false,
  column: [
	  {
      label: '记录唯一标识是该表的记录唯一标识，本记录的唯一标识，取值为 UUID，符合 GB/T17969.8-2010 的规定',
      prop: 'windowApplyId'
    },
	  {
      label: '申请号',
      prop: 'applyNum'
    },
	  {
      label: '申请人',
      prop: 'applicant'
    },
	  {
      label: '申请单位',
      prop: 'applyDepartment'
    },
	  {
      label: '申请时间  格式：yyyy-MM-dd HH:mm:ss',
      prop: 'applyDate'
    },
	  {
      label: '申请状态',
      prop: 'applyStatus'
    },
	  {
      label: '项目类型',
      prop: 'projectType'
    },
	  {
      label: '项目名称',
      prop: 'projectName'
    },
	  {
      label: '受理机构',
      prop: 'mechanism'
    },
	  {
      label: '联系人',
      prop: 'userName'
    },
	  {
      label: '联系电话',
      prop: 'phoneNum'
    },
	  {
      label: '申请模板类型',
      prop: 'modelType'
    },
	  {
      label: 'json数据集',
      prop: 'content'
    },
	  {
      label: '事项编号',
      prop: 'affairNum'
    },
	  {
      label: '事项名称',
      prop: 'affairName'
    },
	  {
      label: '待补齐补正资料',
      prop: 'lackMaterial'
    },
	  {
      label: '法定结办期限（天）',
      prop: 'legalDate'
    },
	  {
      label: '是否技术评审',
      prop: 'isTechnicalReview'
    },
	  {
      label: '是否现场核查',
      prop: 'isSiteVerification'
    },
	  {
      label: '是否发布通告',
      prop: 'isVoyageNotice'
    },
	  {
      label: '是否部门评审',
      prop: 'isDepartmentReview'
    },
	  {
      label: '是否重大关系人意见',
      prop: 'isImportantProfit'
    },
	  {
      label: '创建人',
      prop: 'createOperId'
    },
	  {
      label: '格式：yyyy-MM-dd HH:mm:ss',
      prop: 'createDate'
    },
	  {
      label: '修改人',
      prop: 'modifyOperId'
    },
	  {
      label: '格式：yyyy-MM-dd HH:mm:ss',
      prop: 'modityDate'
    },
	  {
      label: '备注',
      prop: 'remark'
    },
	  {
      label: '扩展字段1',
      prop: 'col1'
    },
	  {
      label: '扩展字段2',
      prop: 'col2'
    },
	  {
      label: '扩展字段3',
      prop: 'col3'
    },
	  {
      label: '扩展字段4',
      prop: 'col4'
    },
	  {
      label: '扩展字段5',
      prop: 'col5'
    },
  ]
}
