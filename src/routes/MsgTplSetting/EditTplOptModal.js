/**
 * Created by Administrator on 2017/9/15.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Form, Input, InputNumber, Radio, Modal, Cascader, Switch} from 'antd'

const {TextArea} = Input

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
}

const modal = ({
                 // editType,
                 currentOption,
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
  const {editType} = currentOption;

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
        <FormItem label="显示文本" hasFeedback {...formItemLayout}>
          {currentOption.msgOptionDisplay}
        </FormItem>
        <FormItem label="是否显示" hasFeedback {...formItemLayout}>
          {getFieldDecorator('checked', {
            initialValue: currentOption.checked,
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
        <FormItem label="显示标签" hasFeedback {...formItemLayout}>
          {getFieldDecorator('displayLabel', {
            initialValue: currentOption.displayLabel,
            rules: [
              {
                required: false,
              },
            ],
          })(<TextArea placeholder="显示标签"
                       autosize={{minRows: 10}}/>)}
        </FormItem>

        {
          editType !== 1
            ? <FormItem label="设置SQL" hasFeedback {...formItemLayout}>
            {getFieldDecorator('getSql', {
              initialValue: currentOption.getSql,
              rules: [
                {
                  required: true,
                },
              ],
            })(<TextArea placeholder="设置SQL"
                         autosize={{minRows: 10}}/>)}
          </FormItem>
            : null
        }

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
