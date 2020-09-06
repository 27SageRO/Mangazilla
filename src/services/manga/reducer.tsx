import actions from './actions';

const initialState: MangaState = {
  popularManga: [],
  latestManga: [],
};

export default function (
  state = initialState,
  action: MangaActions,
): MangaState {
  const {type, payload} = action;

  switch (type) {
    case actions.constants.SET_POPULAR_MANGA:
      return {...state, popularManga: payload};
    case actions.constants.SET_LATEST_MANGA:
      return {...state, latestManga: payload};
    default:
      return state;
  }
}
