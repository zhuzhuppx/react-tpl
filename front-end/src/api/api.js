import { fetch } from "./service/services";

export const ppx = data => fetch("get", "", "/mock/ppx", data);
