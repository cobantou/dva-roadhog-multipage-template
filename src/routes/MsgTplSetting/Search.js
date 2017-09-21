import React from 'react';
import {Layout, Menu, Form, Select} from 'antd'
import {connect} from 'dva';
import styles from './MsgTplSetting.less';

const {SubMenu} = Menu;
const {Content, Sider} = Layout;
const FormItem = Form.Item;
const Option = Select.Option;

function Search({
                  onChange,
                  product,
                  form: {
                    getFieldDecorator
                  }
                }) {
  const handleOnChange = (value) => {
    onChange(value);
  }


  return (
    <Form className={styles.search}>
      <FormItem
        label="产品"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
      >
        {getFieldDecorator('gender', {
          // initialValue: product.length > 0 && product[0].productUid || undefined,
          rules: [{required: true, message: 'Please select your gender!'}],
        })(
          <Select
            onChange={handleOnChange}
            placeholder="请选择产品"
          >
            {
              product.map((v) => {
                return <Option key={v.productUid}>{v.productName}</Option>
              })
            }
          </Select>
        )}
      </FormItem>
    </Form>
  );
}

function mapStateToProps() {
  return {};
}

export default Form.create({})(Search);
