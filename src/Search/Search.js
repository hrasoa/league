// @flow
import React, { Fragment } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import withRouter from '../_Router/withRouter';
import type { UrlFormatter, UrlSearch } from '../_Router/type';
import Wrapper from '../_Wrapper';
import styles from './Search.scss';
import Categories from './Categories';
import All from './All';
import Players from './Players';

const Search = ({ url, search }: { url: UrlFormatter, search: UrlSearch }) => (
  <Fragment>
    <div className={styles.title}>
      <Wrapper>
        Search for {search().q || null}
      </Wrapper>
    </div>
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
