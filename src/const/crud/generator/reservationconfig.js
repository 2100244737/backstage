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
      prop: 'reservationConfigId'
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
      label: '事项类型',
      prop: 'affairType'
    },
	  {
      label: '是否可预约  1是2否',
      prop: 'isReservation'
    },
	  {
      label: '预约人数上限',
      prop: 'reservationMax'
    },
	  {
      label: '可预约开始日期  格式：yyyy-MM-dd',
      prop: 'startDate'
    },
	  {
      label: '可预约结束日期  格式：yyyy-MM-dd',
      prop: 'endDate'
    },
	  {
      label: '可预约开始时间  格式：HH:mm:ss',
      prop: 'startTime'
    },
	  {
      label: '可预约结束时间  格式：HH:mm:ss',
      prop: 'endTime'
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
