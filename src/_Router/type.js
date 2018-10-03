// @flow
export type UrlParams = {
  params?: { [name: string]: string | number },
  state?: any,
  hash?: string,
  search?: { [name: string]: string | number },
};

export type UrlFormatter = (name: string, urlParams?: $Shape<UrlParams>) => string;

export type UrlPush = (name: string, urlParams?: $Shape<UrlParams>) => void;
