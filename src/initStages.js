// Use babel-repl to minify
(stages => {
  const docEl = document.documentElement;
  const classNames = getClassNames(stages).filter(Boolean);

  if (
    classNames.length ||
    ('serviceWorker' in navigator &&
      navigator.serviceWorker.controller !== null &&
      navigator.serviceWorker.controller.state === 'activated')
  ) {
    classNames.forEach(className => {
      docEl.classList.add(className);
    });
  }

  function getClassNames(stage) {
    const arr = [(sessionStorage[stage.name] && stage.className) || null];
    return stage.next ? arr.concat(getClassNames(stage.next)) : arr;
  }
})(window.fonts);
