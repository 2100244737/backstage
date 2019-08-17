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
      prop: 'workHandbookId'
    },
	  {
      label: '政务事项名称',
      prop: 'govAffairName'
    },
	  {
      label: '业务类别',
      prop: 'businessType'
    },
	  {
      label: '当前机构',
      prop: 'currInstitution'
    },
	  {
      label: '区域名称',
      prop: 'areaName'
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
      label: '事项分类',
      prop: 'affairType'
    },
	  {
      label: '办件类型',
      prop: 'type'
    },
	  {
      label: '实施主体',
      prop: 'implementer'
    },
	  {
      label: '实施主体编码',
      prop: 'implementerCode'
    },
	  {
      label: '是否收费',
      prop: 'isCharge'
    },
	  {
      label: '服务对象',
      prop: 'serviceObject'
    },
	  {
      label: '申请人',
      prop: 'applicant'
    },
	  {
      label: '申请时间  格式：yyyy-MM-dd HH:mm:ss',
      prop: 'applyDate'
    },
	  {
      label: '办理地点',
      prop: 'approveAddress'
    },
	  {
      label: '咨询方式',
      prop: 'consultType'
    },
	  {
      label: '监督投诉方式',
      prop: 'superviseType'
    },
	  {
      label: '办理流程',
      prop: 'processingProcess'
    },
	  {
      label: '受理条件',
      prop: 'acceptanceCondition'
    },
	  {
      label: '收费标准',
      prop: 'feeScale'
    },
	  {
      label: '设定依据',
      prop: 'settingBasis'
    },
	  {
      label: '办结结果',
      prop: 'pResult'
    },
	  {
      label: '常见问题',
      prop: 'faq'
    },
	  {
      label: '办理状态',
      prop: 'status'
    },
	  {
      label: '权利来源',
      prop: 'droitSource'
    },
	  {
      label: '事项版本',
      prop: 'affairVersion'
    },
	  {
      label: '事项状态',
      prop: 'affairStatus'
    },
	  {
      label: '申请材料',
      prop: 'approveMaterial'
    },
	  {
      label: '办理方式',
      prop: 'processingWay'
    },
	  {
      label: '审批证件',
      prop: 'approveCredential'
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
