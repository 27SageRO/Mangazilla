type ReduxState = {
  handler: HandlerState;
  manga: MangaState;
};

type Repository = {
  getPopularManga: () => Promise<Manga[]>;
  getLatestManga: () => Promise<Manga[]>;
};

type MangaSource = 'Batoto' | 'unknown';
