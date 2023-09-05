export declare const httpRequest: <T, U>(path: string, config?: RequestInit | undefined, body?: T | undefined) => Promise<U>;
export declare const getRequest: <U>(path: string, config?: RequestInit | undefined) => Promise<U>;
export declare const postRequest: <T, U>(path: string, body?: T | undefined, config?: RequestInit | undefined) => Promise<U>;
export declare const putRequest: <T, U>(path: string, body?: T | undefined, config?: RequestInit | undefined) => Promise<U>;
export declare const patchRequest: <T, U>(path: string, body?: T | undefined, config?: RequestInit | undefined) => Promise<U>;
export declare const fakeRequest: <T>() => Promise<T>;
