// @flow

declare var module: {
  hot: {
    accept: (path?: string, callback?: () => void | Promise<void>) => void
  }
}

declare module CSSModule {
  declare var exports: { [key: string]: string };
  declare export default typeof exports;
}
