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
      prop: 'knowledgeBaseId'
    },
	  {
      label: '关键字',
      prop: 'keyword'
    },
	  {
      label: '发布部门',
      prop: 'releaseDept'
    },
	  {
      label: '知识分类',
      prop: 'knowledgeClass'
    },
	  {
      label: '业务类型',
      prop: 'businessType'
    },
	  {
      label: '提交时间  格式：yyyy-MM-dd HH:mm:ss',
      prop: 'submitTime'
    },
	  {
      label: '提交人',
      prop: 'submitter'
    },
	  {
      label: '业务简介',
      prop: 'businessIntro'
    },
	  {
      label: '状态',
      prop: 'status'
    },
	  {
      label: '知识库编号',
      prop: 'knowledgeNum'
    },
	  {
      label: '知识库标题',
      prop: 'title'
    },
	  {
      label: '大类',
      prop: 'bClass'
    },
	  {
      label: '小类',
      prop: 'sClass'
    },
	  {
      label: '发布时间  格式：yyyy-MM-dd HH:mm:ss',
      prop: 'issusDate'
    },
	  {
      label: '浏览次数',
      prop: 'viewCount'
    },
	  {
      label: '发布人',
      prop: 'issuser'
    },
	  {
      label: '是否审核',
      prop: 'isApprove'
    },
	  {
      label: '知识库详细描述',
      prop: 'kbDesc'
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
      prop: 'modifyDate'
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
