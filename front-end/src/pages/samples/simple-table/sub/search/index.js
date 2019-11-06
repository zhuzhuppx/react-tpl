import React from "react";
import { Form, Icon, Input, Button } from "antd";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  userNameChange = e => {
    this.props.searchFormChange('userName',e.target.value||'')
  };
  handleSubmit = () => {
     this.props.doSearch()      
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" className="search-bar">
        <Form.Item>
          <Input placeholder="姓名" onChange={this.userNameChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="button" onClick={this.handleSubmit}>
            查询
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "search-form" })(SearchComponent);
