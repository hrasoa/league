// @flow
import React, { Fragment } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import withRouter from '../_Router/withRouter';
import type { UrlFormatter } from '../_Router/type';
import Wrapper from '../_Wrapper';
import Categories from './Categories';
import All from './All';
import Players from './Players';

const Search = ({ url }: { url: UrlFormatter }) => (
  <Fragment>
    <Categories />
    <Wrapper>
      <Switch>
        <Route component={All} exact path={url('search')} />
        <Route component={Players} exact path={url('search_players')} />
      </Switch>
    </Wrapper>
  </Fragment>
);

export default withRouter(Search);
