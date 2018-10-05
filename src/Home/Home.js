import React, { Fragment } from 'react';
import Content from '../_Content/Content';
import Cover from './Cover';

const Home = () => (
  <Fragment>
    <Cover />
    <Content lift />
  </Fragment>
);

export default Home;
