import {
  getProductList,
  getTemplateList,
  getTemplateDetail,
  addTemplate,
  editTemplate,
  addOptionItem,
  editOptionItem,
} from '../services/msgTplSetting'

import {message} from "antd"

export default {
  namespace: 'msgTplSetting',
  state: {
    openedItem: "",
    productUID: undefined,
    msgTemplateUid: undefined,
    msgTemplateItem: {},
    templateDetail: [],
    product: [],
    templateMenu: [],
    currentItem: {},
    currentOption: {},
    addTplModalVisible: false,
    editTplModalVisible: false,
    addModalVisible: false,
    editModalVisible: false,
    modalType: 'create',
    selectedRowKeys: [],
  },
  effects: {
    * onEditClick ({payload}, {call, put, select}) {
      yield put({
        type: 'saveCurrentOption',
        payload: payload
      })

      yield put({
        type: 'openEditModal'
      })
    },
    * onAddClick ({payload}, {call, put, select}) {
      yield put({
        type: 'saveCurrentOption',
        payload: {
          msgOptionUid: payload
        }
      })

      yield put({
        type: 'openAddModal'
      })
    },
    * editTplOpt ({payload}, {call, put, select}) {
      const {msgOptionItemUid, msgTemplateItemUid} = yield select(state => state.msgTplSetting.currentOption);
      const msgTemplateUid = yield select(state => state.msgTplSetting.msgTemplateUid);

      let query = {
        ...payload,
        msgTemplateUid,
        msgOptionItemUid,
        msgTemplateItemUid: msgTemplateItemUid || ""
      }

      const data = yield call(editOptionItem, query);
      if (data.code == 200) {
        message.success("修改成功")
        yield put({
          type: 'getTemplateDetail',
          payload: msgTemplateUid
        })

        yield put({
          type: 'closeEditModal'
        })
      }
    },
    * addTplOpt ({payload}, {call, put, select}) {
      const productUid = yield select(state => state.msgTplSetting.productUID);
      const {msgOptionUid} = yield select(state => state.msgTplSetting.currentOption);
      const msgTemplateUid = yield select(state => state.msgTplSetting.msgTemplateUid);

      const orderBy = "100";

      let query = {
        ...payload,
        rowStatus: payload.rowStatus ? 1 : 0,
        productUid,
        msgOptionUid,
        orderBy
      }

      const data = yield call(addOptionItem, query);
      if (data.code == 200) {
        message.success("新增成功")
        yield put({
          type: 'getTemplateDetail',
          payload: msgTemplateUid
        })

        yield put({
          type: 'closeAddModal'
        })
      }
    },
    * editTpl ({payload}, {call, put, select}) {
      const productUid = yield select(state => state.msgTplSetting.productUID);
      const msgTemplateItem = yield select(state => state.msgTplSetting.msgTemplateItem);

      let query = {
        ...payload,
        rowStatus: payload.rowStatus ? 1 : 0,
        msgTemplateUid: msgTemplateItem.msgTemplateUid
      }

      const data = yield call(editTemplate, query);
      if (data.code == 200) {
        message.success("修改成功")
        yield put({
          type: 'getTemplateList',
          payload: productUid
        })

        yield put({
          type: 'closeEditTplModal'
        })
      }
    },
    * addTpl ({payload}, {call, put, select}) {
      const productUid = yield select(state => state.msgTplSetting.productUID);
      const msgTemplateUid = yield select(state => state.msgTplSetting.msgTemplateUid);

      let query = {
        ...payload,
        rowStatus: payload.rowStatus ? 1 : 0,
        productUid,
        parentMsgTemplateUid: msgTemplateUid,
      }

      const data = yield call(addTemplate, query);
      if (data.code == 200) {
        message.success("新增成功")
        yield put({
          type: 'getTemplateList',
          payload: productUid
        })

        yield put({
          type: 'closeAddTplModal'
        })
      }
    },
    * editTemplateTrigger ({payload}, {call, put}) {
      yield put({
        type: 'changeMsgTemplateUid',
        payload: payload.msgTemplateUid
      })

      yield put({
        type: 'changeMsgTemplateItem',
        payload: payload
      })

      yield put({
        type: 'openEditTplModal'
      })
    },
    * addTemplateTrigger ({payload}, {call, put}) {
      yield put({
        type: 'changeMsgTemplateUid',
        payload: payload
      })

      yield put({
        type: 'openAddTplModal'
      })
    },
    * selectTemplateTrigger ({payload}, {call, put}) {
      yield put({
        type: 'changeMsgTemplateUid',
        payload: payload
      })

      yield put({
        type: 'getTemplateDetail',
        payload: payload
      })
    },
    * getProductList ({payload}, {call, put}) {
      const data = yield call(getProductList);
      if (data.code == 200) {
        yield put({
          type: 'setProductList',
          payload: data.data
        })
      }
    },
    * getTemplateList ({payload}, {call, put}) {
      yield put({
        type: 'setCurrentTpl',
        payload: payload
      })

      let query = {
        productUID: payload,
        loadUseTemplate: false
      }

      const data = yield call(getTemplateList, query);
      if (data.code == 200) {
        yield put({
          type: 'setTemplateList',
          payload: data.data
        })
      }
    },
    * getTemplateDetail ({payload}, {call, put, select}) {
      const productUID = yield select(state => state.msgTplSetting.productUID);

      const query = {
        productUID,
        msgTemplateUID: payload
      }

      const data = yield call(getTemplateDetail, query);
      if (data.code == 200) {
        yield put({
          type: 'setTemplateDetailList',
          payload: data.data
        })
      }
    }
  },
  reducers: {
    saveCurrentOption (state, {payload}) {
      return {
        ...state,
        currentOption: payload
      }
    },
    changeMsgTemplateUid (state, {payload}) {
      return {
        ...state,
        msgTemplateUid: payload
      }
    },
    changeMsgTemplateItem (state, {payload}) {
      return {
        ...state,
        msgTemplateItem: payload
      }
    },
    changeOpenedItem (state, {payload}) {
      return {
        ...state,
        openedItem: payload
      }
    },
    setCurrentTpl (state, {payload}) {
      return {
        ...state,
        productUID: payload
      }
    },
    setTemplateDetailList (state, {payload}) {
      return {
        ...state,
        templateDetail: payload
      }
    },
    setTemplateList (state, {payload}) {
      return {
        ...state,
        templateMenu: payload
      }
    },
    setProductList (state, {payload}) {
      return {
        ...state,
        product: payload
      }
    },
    openEditTplModal (state, {payload}) {
      return {
        ...state,
        editTplModalVisible: true
      }
    },
    closeEditTplModal (state, {payload}) {
      return {
        ...state,
        editTplModalVisible: false
      }
    },
    openAddTplModal (state, {payload}) {
      return {
        ...state,
        addTplModalVisible: true
      }
    },
    closeAddTplModal (state, {payload}) {
      return {
        ...state,
        addTplModalVisible: false
      }
    },
    openAddModal (state, {payload}) {
      return {
        ...state,
        addModalVisible: true
      }
    },
    closeAddModal (state, {payload}) {
      return {
        ...state,
        addModalVisible: false
      }
    },
    openEditModal (state, {payload}) {
      return {
        ...state,
        editModalVisible: true
      }
    },
    closeEditModal (state, {payload}) {
      return {
        ...state,
        editModalVisible: false
      }
    },
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      history.listen((location) => {
        dispatch({
          type: "getProductList"
        })
      })
    },
  },
};
