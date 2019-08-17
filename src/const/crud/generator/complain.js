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
      prop: 'complainId'
    },
	  {
      label: '投诉编号',
      prop: 'complainNum'
    },
	  {
      label: '投诉类型',
      prop: 'complainType'
    },
	  {
      label: '投诉方式',
      prop: 'complainWay'
    },
	  {
      label: '投诉时间  格式：yyyy-MM-dd HH:mm:ss',
      prop: 'complainTime'
    },
	  {
      label: '投诉人',
      prop: 'userName'
    },
	  {
      label: '投诉人电话',
      prop: 'phoneNum'
    },
	  {
      label: '投诉人邮箱',
      prop: 'email'
    },
	  {
      label: '投诉人地址',
      prop: 'address'
    },
	  {
      label: '投诉内容',
      prop: 'content'
    },
	  {
      label: '反馈',
      prop: 'feedback'
    },
	  {
      label: '接收人',
      prop: 'handler'
    },
	  {
      label: '满意度',
      prop: 'satisfation'
    },
	  {
      label: '状态',
      prop: 'status'
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
      prop: 'col15'
    },
  ]
}
