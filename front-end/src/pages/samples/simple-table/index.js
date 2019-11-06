import React from "react";
import { Table } from "antd";
import SearchComponent from "./sub/search";
import { loadSampleTableData } from "@/api/api";
import "./index.less";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
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
  }
];
class TablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchForm: { pageSize: 10, pageNumber: 1, total: 0, userName: "" },
      datas: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }
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
    const dataSource = this.state.datas;

    const { pageNumber, pageSize, total } = this.state.searchForm;
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
      </div>
    );
  }
}
export default TablePage;
