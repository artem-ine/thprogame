import { PageList } from "./PageList.js";
import { PageDetail } from "./PageDetail.js";

export const routes = {
  "": PageList,
  pagedetail: PageDetail,
  search: (argument) => {
    PageList(argument);
  },
};
