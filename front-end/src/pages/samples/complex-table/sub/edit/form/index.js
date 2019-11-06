import React from "react";
import { Form, Input, Button,InputNumber } from "antd";
class EditRowForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.handleOk(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { userName, age, address } = this.props.currentRow;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="姓名">
          {getFieldDecorator("userName", {
            initialValue: userName,
            rules: [
              {
                type: "string",
                required: true,
                message: "请输入姓名!"
              }
            ]
          })(<Input style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item label="年龄">
          {getFieldDecorator("age", {
            initialValue: age,
            rules: [{ required: true, message: "请输入年龄!" },{ type:'number',required: true, message: "年龄必须是数字!" }]
          })(<InputNumber  style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item label="住址">
          {getFieldDecorator("address", {
            initialValue: address,
            rules: [{ required: true, message: "请输入住址!" }]
          })(<Input style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
          <Button
            type="primary"
            htmlType="button"
            onClick={this.props.handleCancel}
            style={{ marginLeft: "16px" }}
          >
            取消
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedEditRowForm = Form.create({ name: "edit-row-form" })(EditRowForm);

export default WrappedEditRowForm;
