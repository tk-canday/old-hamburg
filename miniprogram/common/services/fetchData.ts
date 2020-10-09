type IData = string | Record<string, any> | ArrayBuffer;

export const fetchData = (method: 'GET' | 'POST', url: string, data?: IData) => {
  // return new Promise()
  return new Promise((resolve: any, reject: any) => {
    wx.request({
      method,
      url: `http://bl.7yue.pro${url}`,
      header: {
        appkey: 'hAtuep19V7aysiBZ',
        'content-type': 'application/json',
      },
      data,
      success: (res) => {
        resolve(res);
      },
      fail(res) {
        reject(res);
        wx.showToast({
          icon: 'none',
          title: res.errMsg,
        });
        throw new Error(res.errMsg);
      }
    })
  });
}

export const getData = (url: string, data?: {[name: string]: any}) => {
  let queryString = '';
  if (data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        if (value) {
          queryString += !queryString ? `?${key}=${value}` : `&${key}=${value}`;
        }
      }
    }
  }
  url += queryString;
  return fetchData('GET', url, data);
};

export const postData = (url: string, data?: {[name: string]: any}) => {
  return fetchData('POST', url, data);
};