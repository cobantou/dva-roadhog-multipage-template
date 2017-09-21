import React from 'react';
import {connect} from 'dva';
import {Table, Icon, Badge, Checkbox, Button} from 'antd';

import styles from './Table.less';

function MsgTable({editType, data, onEditClick, loading}) {
  const handleEditClick = (msgOptionItem) => (e) => {
    onEditClick(msgOptionItem)
  }

  let columns = [
    {
      title: '显示文本',
      dataIndex: 'msgOptionDisplay',
      key: 'msgOptionDisplay',
      width: "20%"
    },
    {
      title: '是否显示',
      dataIndex: 'checked',
      key: 'checked',
      width: "100",
      render: (text, record, index) => {
        return <span>
          { text ? <Badge status="success" text="是"/> : <Badge status="error" text="否"/>}
        </span>
      }
    },
    {
      title: '显示标签',
      dataIndex: 'displayLabel',
      key: 'displayLabel',
      width: "20%"
    },
    {
      title: '设置SQL',
      dataIndex: 'getSql',
      key: 'getSql'
    },
    {
      title: '操作',
      dataIndex: 'msgOptionItemUid',
      key: 'msgOptionItemUid',
      width: "200",
      render: (text, record, index) => {
        return <span>
          <Button icon="edit" onClick={handleEditClick(record)}>修改</Button>
        </span>
      }
    },
  ].filter((v) => {
    if (editType === 1) {
      return v.dataIndex !== "getSql";
    }
    return true
  })


  return (
    <div className={styles.normal}>
      <Table
        className={styles["components-table-demo-nested"]}
        columns={columns}
        dataSource={data}
        pagination={false}
        loading={loading}
      />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MsgTable);
