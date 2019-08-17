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
      prop: 'problemId'
    },
	  {
      label: '问题编号',
      prop: 'problemNum'
    },
	  {
      label: '问题类型',
      prop: 'problemType'
    },
	  {
      label: '问题描述',
      prop: 'problemDesc'
    },
	  {
      label: '答复内容',
      prop: 'content'
    },
	  {
      label: '相关链接',
      prop: 'link'
    },
	  {
      label: '状态',
      prop: 'status'
    },
	  {
      label: '发布时间  格式：yyyy-MM-dd HH:mm:ss',
      prop: 'issueTime'
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
      prop: '备注'
    },
	  {
      label: '扩展字段1',
      prop: '扩展字段1'
    },
	  {
      label: '扩展字段2',
      prop: '扩展字段2'
    },
	  {
      label: '扩展字段3',
      prop: '扩展字段3'
    },
	  {
      label: '扩展字段4',
      prop: '扩展字段4'
    },
	  {
      label: '扩展字段5',
      prop: '扩展字段5'
    },
  ]
}
