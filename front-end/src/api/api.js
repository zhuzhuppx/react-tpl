import { fetch } from "./service/services";

export const getMenuItems = data => fetch("get", "", "/mock/menu", data);
export const loadSampleTableData = data => fetch("post", "", "/mock/sampleTable", data);


