/* eslint-disable no-undef */
const requestConfig = (config) => {
    let configuration = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (config) {
        configuration = {
            ...configuration,
            ...config,
            method: config.method || 'GET',
            headers: {
                ...configuration.headers,
                ...config.headers,
            },
        };
    }
    return configuration;
};
export const httpRequest = async (path, config, body) => {
    const reqConfig = requestConfig(config);
    if (body) {
        reqConfig.body = JSON.stringify(body);
    }
    const response = await fetch(path, reqConfig);
    if (!response.ok) {
        const err = new Error(JSON.stringify(response));
        err.name = response.status.toString();
        err.message = response.statusText;
        throw err;
    }
    const result = await response.json();
    return result;
};
export const getRequest = async (path, config) => httpRequest(path, { ...config, method: 'GET' });
export const postRequest = async (path, body, config) => httpRequest(path, { ...config, method: 'POST' }, body);
export const putRequest = async (path, body, config) => httpRequest(path, { ...config, method: 'PUT' }, body);
export const patchRequest = async (path, body, config) => httpRequest(path, { ...config, method: 'PATCH' }, body);
export const fakeRequest = async () => {
    const res = await getRequest('https://my-json-server.typicode.com/typicode/demo/posts');
    return res;
};
//# sourceMappingURL=http.js.map