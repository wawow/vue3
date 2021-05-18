import axios from 'axios';

axios.interceptors.request.use(config => {
    if (!config.url) {
        throw new Error('url is error!');
    }

    // 测试环境，接口加随机数，避免接口缓存
    if (process.env.NODE_ENV === 'development') {
        config.params = {
            [`${(+new Date()).toString(36).substr(3)}`]: '', // 避免接口缓存
            ...config.params,
        };
    }
    return config
}, error => {
    return Promise.error(error)
})

axios.interceptors.response.use(
    (res) => responseIntercept(res),
    (err) => {
        return Promise.reject(err);
    },
);

 /**
 * 响应拦截
 * @param {Object} res
 */
function responseIntercept(res) {
    try {
        const { code, msg } = res.data;

        if (`${code}` === '-1') {
            // login58();

            return Promise.reject(new Error(msg));
        }

        return res;
    } catch (err) {
        return res;
    }
}
