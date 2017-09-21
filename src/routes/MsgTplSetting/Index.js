import React from 'react';
import {Layout, Menu, Form, Select} from 'antd'
import {connect} from 'dva';
import Search from './Search'
import Container from './Container'
import AddTplOptModal from './AddTplOptModal'
import EditTplOptModal from './EditTplOptModal'
import AddTplModal from './AddTplModal'
import EditTplModal from './EditTplModal'
import MsgTplSettingMenu from './Menu'

import styles from './MsgTplSetting.less';

const {Content, Sider} = Layout;
const FormItem = Form.Item;
const Option = Select.Option;

function MsgTplSetting({location, dispatch, msgTplSetting, loading}) {
  const {
    addModalVisible, modalType, product, templateMenu, templateDetail, openedItem, addTplModalVisible, editTplModalVisible, msgTemplateUid,
    msgTemplateItem, productUID, editModalVisible, currentOption
  } = msgTplSetting

  const addTplOptModalProps = {
    //  item: modalType === 'create' ? {} : currentItem,
    modalProps: {
      visible: addModalVisible,
      maskClosable: false,
      confirmLoading: loading.effects['msgTplSetting/addOptionItem'],
      title: `新增项`,
      wrapClassName: 'vertical-center-modal',
    },
    onOk (data) {
      dispatch({
        type: 'msgTplSetting/addTplOpt',
        payload: data
      })
    },
    onCancel () {
      dispatch({
        type: 'msgTplSetting/closeAddModal'
      })
    },
  }

  // todo 不用这个，用currentOption.editType
  // const openedItemObj = templateDetail.find((v) => {
  //   return v.msgOptionUid === openedItem;
  // })
  // console.log(openedItemObj)

  const editTplOptModalProps = {
    // editType: openedItemObj && openedItemObj.editType,
    currentOption,
    modalProps: {
      width:700,
      visible: editModalVisible,
      maskClosable: false,
      confirmLoading: loading.effects['msgTplSetting/editOptionItem'],
      title: `修改项`,
      wrapClassName: 'vertical-center-modal',
    },
    onOk (data) {
      dispatch({
        type: 'msgTplSetting/editTplOpt',
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'msgTplSetting/closeEditModal'
      })
    },
  }

  const addTplModalProps = {
    msgTemplateUid,
    modalProps: {
      visible: addTplModalVisible,
      maskClosable: false,
      confirmLoading: loading.effects['msgTplSetting/addTemplate'],
      title: '新增消息模板',
      wrapClassName: 'vertical-center-modal',
    },
    onCancel(){
      dispatch({
        type: 'msgTplSetting/closeAddTplModal'
      })
    },
    onOk(data){
      dispatch({
        type: 'msgTplSetting/addTpl',
        payload: data
      })
    }
  }

  const editTplModalProps = {
    msgTemplateItem,
    modalProps: {
      visible: editTplModalVisible,
      maskClosable: false,
      confirmLoading: loading.effects['msgTplSetting/editTemplate'],
      title: '修改消息模板',
      wrapClassName: 'vertical-center-modal',
    },
    onCancel(){
      dispatch({
        type: 'msgTplSetting/closeEditTplModal'
      })
    },
    onOk(data){
      dispatch({
        type: 'msgTplSetting/editTpl',
        payload: data
      })
    }
  }

  const containerProps = {
    loading: loading.effects['msgTplSetting/getTemplateDetail'],
    openedItem,
    templateDetail,
    onAddClick (msgOptionUid){
      dispatch({
        type: 'msgTplSetting/onAddClick',
        payload: msgOptionUid
      })
    },
    onEditClick (msgOptionItem){
      dispatch({
        type: 'msgTplSetting/onEditClick',
        payload: msgOptionItem
      })
    },
    onCollapseChange(key){
      dispatch({
        type: 'msgTplSetting/changeOpenedItem',
        payload: key
      })
    }
  }

  const searchProps = {
    product,
    onChange(value){
      dispatch({
        type: 'msgTplSetting/getTemplateList',
        payload: value
      })
    }
  }

  const msgTplSettingMenuProps = {
    productUID,
    menu: templateMenu,
    onSelect(msgTemplateUid){
      dispatch({
        type: 'msgTplSetting/selectTemplateTrigger',
        payload: msgTemplateUid
      })
    },
    onAddClick(msgTemplateUid){
      dispatch({
        type: 'msgTplSetting/addTemplateTrigger',
        payload: msgTemplateUid
      })
    },
    onEditClick(item){
      dispatch({
        type: 'msgTplSetting/editTemplateTrigger',
        payload: item
      })
    }
  }

  return (
    <Layout style={{background: '#fff', height: '100vh'}}>
      <div className={styles.sider}>
        <div className={styles.siderInner}>
          <Search {...searchProps}/>
          <MsgTplSettingMenu {...msgTplSettingMenuProps}/>
        </div>
      </div>
      <Layout className={styles.layoutMain}>
        <Content style={{padding: '0 24px', minHeight: 280}}>
          <Container {...containerProps}/>
        </Content>
      </Layout>

      {addTplModalVisible && <AddTplModal {...addTplModalProps}/>}
      {editTplModalVisible && <EditTplModal {...editTplModalProps}/>}

      {addModalVisible && <AddTplOptModal {...addTplOptModalProps}/>}
      {editModalVisible && <EditTplOptModal {...editTplOptModalProps}/>}

    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(({msgTplSetting, loading}) => ({msgTplSetting, loading}))(MsgTplSetting);
