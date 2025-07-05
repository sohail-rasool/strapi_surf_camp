import { BASE_URL } from "@/utils/config";
import { GET_HOME_PAGE, GET_PAGES, GLOBAL_API } from "@/utils/endpoints";
import { fetchAPI } from "@/utils/fetch-api";
import { globalSettingQuery, homePageQuery, pageBySlugQuery } from "@/utils/strapiQuries";

export const getHomePage = async () => {
  const url = new URL(GET_HOME_PAGE, BASE_URL);
  url.search = homePageQuery;
  return fetchAPI(url.href, { method: "GET" });
};

export async function getPageBySlug(slug: string) {
  const url = new URL(GET_PAGES, BASE_URL);
  url.search = pageBySlugQuery(slug);
  return await fetchAPI(url.href, { method: "GET" });
}

export async function getGlobalSettings() {
  const url = new URL(GLOBAL_API, BASE_URL);
  url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
