// @flow
export type Props = {
  alt: string,
  className: ?string,
  image: { src: string, preSrc: string },
  styles: ?{ [className: string]: string },
};

export type Styles = {
  root: string,
  loaded: string,
  pre: string,
  picture: string,
  image: string,
  ratio: string,
};
