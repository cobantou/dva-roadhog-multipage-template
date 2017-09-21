import React from 'react';
import {connect} from 'dva';
import {Layout, Menu, Form, Select, Icon, Tag, Badge ,Button} from 'antd'
import styles from './Menu.less';

const {SubMenu} = Menu;

function MsgTplSettingMenu({productUID, menu, onSelect, onAddClick, onEditClick}) {
  //获取当前选中项
  let defaultSelectedKeys = [];
  let defaultOpenKeys = [];
  if (menu.length) {
    defaultSelectedKeys = [menu[0].msgTemplateUid];
  }

  const handleAddClick = (msgTemplateUid) => (e) => {
    e.stopPropagation()
    onAddClick(msgTemplateUid);
  }

  const handleEditClick = (item) => (e) => {
    e.stopPropagation()
    onEditClick(item);
  }


  // 递归生成菜单
  const getMenus = (menuTreeN) => {
    return menuTreeN.map((item) => {
      if (item.subMsgTemplate) {
        defaultOpenKeys.push(item.msgTemplateUid)
        return (
          <SubMenu
            key={item.msgTemplateUid}
            title={<span>
              { item.rowStatus && <Badge status="error"/> || null}
              <span className={styles.name}>{item.msgType}</span>
              <Icon type="plus-circle-o" onClick={handleAddClick(item.msgTemplateUid)}/>
              <Icon type="edit" onClick={handleEditClick(item)}/>
            </span>}
          >
            {getMenus(item.subMsgTemplate)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.msgTemplateUid}>
          { item.rowStatus && <Badge status="error"/> || null}
          <span className={styles.name}>{item.msgType}</span>

          <Icon type="plus-circle-o" onClick={handleAddClick(item.msgTemplateUid)}/>
          <Icon type="edit" onClick={handleEditClick(item)}/>
        </Menu.Item>
      )
    })
  }
  const menuItems = getMenus(menu)

  const handleOnSelect = ({item, key, selectedKeys}) => {
    if (key !== "nodata") {
      onSelect(key);
    }
  }

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys }
      defaultOpenKeys={defaultOpenKeys}
      style={{height: '100%'}}
      onSelect={handleOnSelect}
    >
      { productUID && <Menu.Item key={"nodata"}>
        <Button icon="plus" onClick={handleAddClick()}>添加根节点</Button>
      </Menu.Item>}
      { menu.length && menuItems}
    </Menu>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MsgTplSettingMenu);
