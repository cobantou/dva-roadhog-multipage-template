/**
 * Created by Administrator on 2017/9/15.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input, InputNumber, Radio, Modal, Cascader, Switch} from 'antd'

const {TextArea} =Input

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
                 msgTemplateUid,
                 item = {},
                 onOk,
                 onCancel,
                 modalProps,
                 form: {
                   getFieldDecorator,
                   validateFields,
                   getFieldsValue,
                 }
               }) => {

  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
      }
      onOk(data)
    })
  }

  const handleCancel = () => {
    onCancel();
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
    onCancel: handleCancel,
  }


  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="父模板ID" hasFeedback {...formItemLayout}>
          {msgTemplateUid}
        </FormItem>
        <FormItem label="模板ID" hasFeedback {...formItemLayout}>
          {getFieldDecorator('msgTemplateUid', {
            rules: [
              {
                required: true,
                message: '请填写模板ID!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="模板名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('msgType', {
            rules: [
              {
                required: true,
                message: '请填写模板名称!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="停用" hasFeedback {...formItemLayout}>
          {getFieldDecorator('rowStatus', {
            initialValue: false,
            valuePropName: 'checked',
            rules: [
              {
                required: true,
                type: 'boolean',
              },
            ],
          })(
            <Switch />
          )}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
