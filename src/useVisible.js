import { useContext } from 'react';
import { WindowSizeContext } from './_WindowSize';
import useRect from './useRect';

const useVisible = (ref) => {
  const { rect } = useRect(ref);
  const size = useContext(WindowSizeContext);

  return size ? isInWindow(rect, size) : false;
};

function isInWindow(rect, size) {
  return isVerticallyInWindow(rect, size) && isHorizontallyInWindow(rect, size);
}

function isVerticallyInWindow(rect, size) {
  return (rect.top <= size.height && rect.bottom >= 0)
    || (rect.top <= 0 && rect.bottom >= 0);
}

function isHorizontallyInWindow(rect, size) {
  return rect.left <= size.width;
}

export default useVisible;
