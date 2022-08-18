export default async function (url: string, data: any = {}) {
  try {
    if (!data.headers) data.headers = {};

    if (localStorage.getItem("access_token")) {
      data["headers"]["Authorization"] =
        "Bearer " + localStorage.getItem("access_token");
    } // http://31.31.203.10:8084 - non-temporary link

    const response = await fetch("https://api.shashlandia.ru" + url, data);

    if (response.status === 200 || 201) {
      return await response.json();
    }
  } catch (err) {
    return await err;
  }
}
