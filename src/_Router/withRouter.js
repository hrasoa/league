// @flow
import React, { Component } from 'react';
import type { ComponentType } from 'react';
import { withRouter as withRouterDom } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import type { UrlParams } from './type';
import routes from '../routes';

type Props = {
  history: RouterHistory,
}

function withRouter(WrappedComponent: ComponentType<any>) {
  class WithRouter extends Component<Props> {
    push = (name: string, urlParams: UrlParams) => {
      const { history } = this.props;
      const url = this.url(name, urlParams);
      if (!url) {
        return;
      }
      history.push(url);
    }

    url = (name: string, urlParams?: UrlParams): string => {
      let url = name in routes ? routes[name].path : null;
      if (!url) {
        return this.url('home');
      }
      if (!urlParams) {
        return url;
      }
      const { params, query } = urlParams;
      if (params) {
        url = url.replace(new RegExp('(:[^/]*)', 'g'), (match: string, p1: string): string => {
          const p = p1.replace(':', '');
          return `${params[p]}` || p1;
        });
      }
      if (query) {
        url = `${url}?${Object.keys(query).map(q => `${q}=${query[q]}`).join('&')}`;
      }
      return url;
    }

    render() {
      return (
        <WrappedComponent
          push={this.push}
          url={this.url}
          {...this.props}
        />
      );
    }
  }

  return withRouterDom(WithRouter);
}

export default withRouter;
