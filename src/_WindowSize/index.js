/* eslint-disable react/prop-types */
import React from 'react';
import useWindowSize from '../useWindowSize';

const WindowSizeContext = React.createContext();

const WindowSizeProvider = ({ children }) => (
  <WindowSizeContext.Provider value={useWindowSize()}>
    {children}
  </WindowSizeContext.Provider>
);

export default WindowSizeProvider;

export { WindowSizeContext };
