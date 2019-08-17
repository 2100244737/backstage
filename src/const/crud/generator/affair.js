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
      prop: 'affairId'
    },
	  {
      label: '事项编号',
      prop: 'affairNum'
    },
	  {
      label: '事项类型',
      prop: 'affairType'
    },
	  {
      label: '事项名称',
      prop: 'affairName'
    },
	  {
      label: '服务对象',
      prop: 'serveUser'
    },
	  {
      label: '业务类型',
      prop: 'serveBusiness'
    },
	  {
      label: '事项性质',
      prop: 'affairNature'
    },
	  {
      label: '服务层级',
      prop: 'serveTop'
    },
	  {
      label: '业务办理方式：1"在线办理",2"预约办理"',
      prop: 'handleStatus'
    },
	  {
      label: '创建人',
      prop: 'createOpenId'
    },
	  {
      label: '创建时间  格式：yyyy-MM-dd HH:mm:ss',
      prop: 'createData'
    },
	  {
      label: '修改人',
      prop: 'modifyOperId'
    },
	  {
      label: '修改时间  格式：yyyy-MM-dd HH:mm:ss',
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
