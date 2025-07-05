import { BASE_URL } from "@/utils/config";
import { GET_HOME_PAGE } from "@/utils/endpoints";
import { fetchAPI } from "@/utils/fetch-api";
import { homePageQuery } from "@/utils/strapiQuries";

export const getHomePage = async () => {
  const url = new URL(GET_HOME_PAGE, BASE_URL);
  url.search = homePageQuery;
  return fetchAPI(url.href, { method: "GET" });
};
