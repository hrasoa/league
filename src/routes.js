// @flow
const routes: { [name: string]: { path: string } } = {
  home: { path: '/' },
  leagues: { path: '/leagues' },
  mercato: { path: '/mercato' },
  player: { path: '/player/:id' },
  search: { path: '/search' },
};

export default routes;
