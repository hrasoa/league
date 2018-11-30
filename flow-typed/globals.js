// @flow
declare var module: {
  hot: {
    accept: (path?: string, callback?: () => void | Promise<void>) => void,
  },
};

declare type HTMLRef<E> = { current: null | E };
