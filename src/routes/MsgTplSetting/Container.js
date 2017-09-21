import React from 'react';
import {connect} from 'dva';
import {Collapse, Alert, Button, Tooltip, Icon} from 'antd';
import styles from './Container.less';
import MsgTable from './Table'

const {Panel} = Collapse;


const Containner = ({
                      loading,
                      openedItem,
                      templateDetail,
                      onAddClick,
                      onCollapseChange,
                      onEditClick,
                    }) => {

  const header = ({title, editType, msgOptionUid}) => {
    const handleOnClick = (msgOptionUid) => (e) => {
      e.stopPropagation();
      onAddClick(msgOptionUid);
    }

    return (
      <span>
       <span className={styles.settingTitle}>配置项：{title} </span>
        {
          editType === 3 ?
            <Button icon="plus" type="primary" className={styles.addBtn}
                    onClick={handleOnClick(msgOptionUid)}>新增</Button>
            : null
        }
      </span>

    )
  }
  const tableProps = {
    onEditClick,
    loading
  }

  const handleCollapseChange = (key) => {
    onCollapseChange(key)
  }

  let help = "";
  const openItem = templateDetail.find((v) => {
    return v.msgOptionUid === openedItem
  });

  if (openItem) {
    help = openItem.help;
  }

  return (
    <div className={styles.normal}>
      <Collapse  onChange={handleCollapseChange}>
        {
          templateDetail.map((v) => {
            return <Panel header={header({title: v.msgOption, editType: v.editType, msgOptionUid: v.msgOptionUid})}
                          key={v.msgOptionUid}>
              <MsgTable
                editType={v.editType}
                data={v.items}
                {...tableProps}
              />
            </Panel>
          })
        }
      </Collapse>

      <Alert
        className={styles.alert}
        message="帮助"
        description={help}
        type="info"
      />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Containner);
