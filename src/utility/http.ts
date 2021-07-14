// type requestType = 'GET' | 'POST' | 'PUT' | 'PATCH';

const requestConfig = (config?: RequestInit): RequestInit => {
  let configuration: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
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

export const httpRequest = async <T, U>(
  path: string,
  config?: RequestInit,
  body?: T
): Promise<U> => {
  const reqConfig: RequestInit = requestConfig(config);

  if (body) {
    reqConfig.body = JSON.stringify(body);
  }

  const response: Response = await fetch(path, reqConfig);
  if (!response.ok) {
    const err = new Error(JSON.stringify(response));
    err.name = response.status.toString();
    err.message = response.statusText;
    throw err;
  }
  const result = await response.json();
  return result;
};

export const getRequest = async <U>(
  path: string,
  config?: RequestInit
): Promise<U> => {
  return httpRequest(path, { ...config, method: 'GET' });
};

export const postRequest = async <T, U>(
  path: string,
  config?: RequestInit,
  body?: T
): Promise<U> => {
  return httpRequest(path, { ...config, method: 'POST' }, body);
};

export const putRequest = async <T, U>(
  path: string,
  config?: RequestInit,
  body?: T
): Promise<U> => {
  return httpRequest(path, { ...config, method: 'PUT' }, body);
};

export const patchRequest = async <T, U>(
  path: string,
  config?: RequestInit,
  body?: T
): Promise<U> => {
  return httpRequest(path, { ...config, method: 'PATCH' }, body);
};

export const fakeRequest = async <T>(): Promise<T> => {
  const res: T = await getRequest(
    'https://my-json-server.typicode.com/typicode/demo/posts'
  );
  return res;
};
