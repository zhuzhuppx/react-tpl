import React from "react";
import { Modal, Button } from "antd";
import EditRowForm from './form/index'
class EditRow extends React.Component {
  render() {
    const { handleCancel, handleOk, visible,currentRow } = this.props;
    return (
      <div>
        <Modal centered closable={false}
          title="编辑"
          visible={visible}
          footer={null}
        >
         <EditRowForm currentRow={currentRow} handleOk={handleOk} handleCancel={handleCancel}></EditRowForm>
        </Modal>
      </div>
    );
  }
}
export default EditRow;
