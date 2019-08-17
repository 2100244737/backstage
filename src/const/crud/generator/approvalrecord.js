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
      label: '生成规则UUID',
      prop: 'approvalRecordId'
    },
	  {
      label: '窗口申请表ID',
      prop: 'windowApplyId'
    },
	  {
      label: '流程节点ID',
      prop: 'processNodeId'
    },
	  {
      label: '流程线ID',
      prop: 'processLinkId'
    },
	  {
      label: '流程状态',
      prop: 'status'
    },
	  {
      label: '角色名称',
      prop: 'roleName'
    },
	  {
      label: '审批用户名称',
      prop: 'userName'
    },
	  {
      label: '审批时间',
      prop: 'approvalDate'
    },
	  {
      label: '创建人',
      prop: 'createOperId'
    },
	  {
      label: '创建时间',
      prop: 'createOper'
    },
	  {
      label: '修改人',
      prop: 'modifyOperId'
    },
	  {
      label: '修改时间',
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
