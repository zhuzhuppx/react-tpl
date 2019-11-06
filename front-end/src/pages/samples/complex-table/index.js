import React from "react";
import { Table, Divider, Popconfirm } from "antd";
import SearchComponent from "./sub/search";
import EditRow from "./sub/edit";
import { loadSampleTableData } from "@/api/api";
import "./index.less";

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    const columns = this.getColumns();
    this.state = {
      searchForm: { pageSize: 10, pageNumber: 1, total: 0, userName: "" },
      datas: [],
      columns: columns,
      editDialogVisible: false,
      currentRow: {}
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  getColumns = () => {
    return [
      {
        title: "姓名",
        dataIndex: "userName",
        key: "userName"
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <Popconfirm
              placement="top"
              title="确定删除？"
              onConfirm={() => {
                this.handleDelete(record);
              }}
              okText="确定"
              cancelText="取消"
            >
              <a>删除</a>
            </Popconfirm>

            <Divider type="vertical" />
            <a
              onClick={() => {
                this.handleEdit(record);
              }}
            >
              编辑
            </a>
          </span>
        )
      }
    ];
  };
  handleDelete = row => {
    console.log(row);
  };
  handleEdit = row => {   
    this.setState({ currentRow: row,editDialogVisible:true });
  };
  saveRow = row => {
    console.log(row);
  };
  searchFormChange = (key, value) => {
    const { searchForm: sSearchForm } = this.state;
    this.setState({ searchForm: { ...sSearchForm, [key]: value } });
  };
  pageChange = page => {
    const { searchForm: sSearchForm } = this.state;
    this.setState({ searchForm: { ...sSearchForm, pageNumber: page } }, () => {
      this.fetchData();
    });
  };
  fetchData = async () => {
    let data = await loadSampleTableData(this.state.searchForm);
    const { total, data: sdata } = data.data.data;
    this.setState({ total: total, datas: sdata });
  };
  render() {
    const {
      datas: dataSource,
      columns,
      searchForm,
      editDialogVisible,currentRow
    } = this.state;
    const { pageNumber, pageSize, total } = searchForm;
    return (
      <div className="table-page">
        <SearchComponent
          doSearch={this.fetchData}
          searchFormChange={this.searchFormChange}
        ></SearchComponent>
        <Table
          rowKey="id"
          dataSource={dataSource}
          columns={columns}
          pagination={{
            onChange: this.pageChange,
            total: total,
            pageSize: pageSize,
            current: pageNumber
          }}
        />
        <EditRow
          visible={editDialogVisible}
          currentRow={currentRow}
          handleOk={this.saveRow}
          handleCancel={() => {
            this.setState({editDialogVisible:false})
          }}
        ></EditRow>
      </div>
    );
  }
}
export default TablePage;
