// Use babel-repl to minify
((stages) => {
  const docEl = document.documentElement;

  if ('fonts' in document) {
    fetchStage(stages);
  }

  function fetchFonts(fonts) {
    return Promise.all(fonts.map(font => document.fonts.load(font)));
  }

  function fetchStage(stage) {
    fetchFonts(stage.fonts).then(() => {
      if (stage.className) {
        docEl.classList.add(stage.name);
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
