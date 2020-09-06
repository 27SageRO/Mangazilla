type MangaState = {
  popularManga: Array<Manga>;
  latestManga: Array<Manga>;
};

type MangaActions = {
  type: string;
  payload: Array<Manga>;
};

type Manga = {
  id: string;
  title: string;
  thumbnail: string;
  latestChapter: string;
};
