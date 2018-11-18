import { useState, useEffect, useRef } from 'react';

const useRect = (ref, once) => {
  const reqAf = useRef(null);
  const [rect, setRect] = useState({});

  function updateRect() {
    setRect(ref.current.getBoundingClientRect());
    reqAf.current = requestAnimationFrame(updateRect);
    console.log('updateRect', reqAf.current);
  }

  function observe(cancel) {
    if (cancel && reqAf.current) {
      console.log('cancel', reqAf.current);
      unobserve();
      return;
    }
    updateRect();
    console.log('start updateRect', reqAf.current);
  }

  function unobserve() {
    console.log('unobserve', reqAf.current);
    cancelAnimationFrame(reqAf.current);
  }

  useEffect(() => {
    if (ref.current) {
      console.log('observe cancel, raf', once, reqAf.current);
      observe(once);
    }
    return () => {
      unobserve();
    };
  });

  return { observe, rect, unobserve };
};

export default useRect;
