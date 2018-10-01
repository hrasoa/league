// Use babel-repl to minify
((stages) => {
  const docEl = document.documentElement;
  const sessions = getSessions(stages).filter(Boolean);

  if (sessions.length
    || ('serviceWorker' in navigator && navigator.serviceWorker.controller !== null && navigator.serviceWorker.controller.state === 'activated')
  ) {
    // do nothing
  } else if ('fonts' in document) {
    fetchStage(stages);
  }

  function getSessions(stage) {
    const arr = [stage.name in sessionStorage];
    return stage.next ? [...arr, ...getSessions(stage.next)] : arr;
  }

  function fetchFonts(fonts) {
    return Promise.all(fonts.map(font => document.fonts.load(font)));
  }

  function fetchStage(stage) {
    fetchFonts(stage.fonts).then(() => {
      if (stage.className) {
        docEl.classList.add(stage.className);
      }
      if (stage.name) {
        sessionStorage[stage.name] = true;
      }
      if (stage.next) {
        fetchStage(stage.next);
      }
    });
  }
})(window.fonts);
