// @flow
const routes: { [name: string]: { path: string } } = {
  home: { path: '/' },
  leagues: { path: '/leagues' },
  mercato: { path: '/mercato' },
  player: { path: '/player/:id' },
  search: { path: '/search' },
  search_leagues: { path: '/search/leagues' },
  search_players: { path: '/search/players' },
  search_teams: { path: '/search/teams' },
  team: { path: '/team/:id' },
};

export default routes;
