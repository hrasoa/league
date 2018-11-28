// @flow
import React, { Component } from 'react';
import type { ComponentType } from 'react';
import { withRouter as withRouterDom } from 'react-router-dom';
import type { RouterHistory, Location } from 'react-router-dom';
import routes from '../routes';
import type { UrlPush, UrlFormatter, UrlSearch } from './type';

type Props = {
  history: RouterHistory,
  location: Location,
};

interface Interface {
  push: UrlPush;
  +search: UrlSearch;
  url: UrlFormatter;
}

function withRouter(WrappedComponent: ComponentType<any>) {
  class WithRouter extends Component<Props> implements Interface {
    get search() {
      const {
        location: { search },
      } = this.props;
      if (!search) {
        return {};
      }
      return queryStringToJson(search);
    }

    push = (name, urlParams) => {
      const { history } = this.props;
      const url = this.url(name, urlParams);
      history.push(url, urlParams ? urlParams.state : null);
    };

    url = (name, urlParams) => {
      let url = name in routes ? routes[name].path : name;
      if (!urlParams) {
        return url;
      }
      const { params, search, hash } = urlParams;
      if (params) {
        url = url.replace(
          new RegExp('(:[^/]*)', 'g'),
          (match: string, p1: string): string => {
            const p = p1.replace(':', '');
            return encodeURI(`${params[p] || p1}`);
          }
        );
      }
      if (search) {
        url = `${url}?${Object.keys(search)
          .map(q => encodeURI(`${q}=${search[q]}`))
          .join('&')}`;
      }
      return hash ? `${url}#${hash}` : url;
    };

    render() {
      return (
        <WrappedComponent
          push={this.push}
          url={this.url}
          search={this.search}
          {...this.props}
        />
      );
    }
  }

  return withRouterDom(WithRouter);
}

function queryStringToJson(qs: string): { [name: string]: string } {
  const pairs = qs.slice(1).split('&');
  return pairs.reduce((acc, pair) => {
    const [name, value] = pair.split('=');
    return { ...acc, [name]: decodeURI(value) };
  }, {});
}

export default withRouter;
