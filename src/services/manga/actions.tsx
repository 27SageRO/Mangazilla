const GET_POPULAR_MANGA = 'GET_POPULAR_MANGA';
const SET_POPULAR_MANGA = 'SET_POPULAR_MANGA';
const GET_LATEST_MANGA = 'GET_LATEST_MANGA';
const SET_LATEST_MANGA = 'SET_LATEST_MANGA';

const getPopularManga = () => ({
  type: GET_POPULAR_MANGA,
});

const setPopularManga = (payload: Array<Manga>) => ({
  type: SET_POPULAR_MANGA,
  payload,
});

const getLatestManga = () => ({
  type: GET_LATEST_MANGA,
});

const setLatestManga = (payload: Array<Manga>) => ({
  type: SET_LATEST_MANGA,
  payload,
});

export default {
  constants: {
    GET_POPULAR_MANGA,
    SET_POPULAR_MANGA,
    GET_LATEST_MANGA,
    SET_LATEST_MANGA,
  },
  creators: {
    getPopularManga,
    setPopularManga,
    getLatestManga,
    setLatestManga,
  },
};
