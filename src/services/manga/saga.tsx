import {all, takeLatest, put} from 'redux-saga/effects';
import actions from './actions';
import repository from 'repository';

function* getPopularManga() {
  try {
    const resp = yield repository('Batoto').getPopularManga();
    yield put(actions.creators.setPopularManga(resp));
  } catch (e) {
    console.log(e);
  }
}

function* getLatestManga() {
  try {
    const resp = yield repository('Batoto').getLatestManga();
    yield put(actions.creators.setLatestManga(resp));
  } catch (e) {
    console.log(e);
  }
}

export default function* saga() {
  yield all([
    takeLatest(actions.constants.GET_POPULAR_MANGA, getPopularManga),
    takeLatest(actions.constants.GET_LATEST_MANGA, getLatestManga),
  ]);
}
