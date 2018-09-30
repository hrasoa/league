// @flow
declare module 'lazy-picture' {
  declare export type Props = {
    alt: string,
    className: ?string,
    preClassName: ?string,
    rootClassName: ?string,
    image: string | { src: string, preSrc: string },
  };
}
