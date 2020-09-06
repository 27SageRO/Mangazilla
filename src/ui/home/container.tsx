import {connect} from 'react-redux';
import Component from './index';

import MangaActions from 'services/manga/actions';

export type Props = {
  getPopularManga: typeof MangaActions.creators.getPopularManga;
  getLatestManga: typeof MangaActions.creators.getLatestManga;
  popularManga: Array<Manga>;
  latestManga: Array<Manga>;
};

const mapStateToProps = (state: ReduxState) => ({
  popularManga: state.manga.popularManga,
  latestManga: state.manga.latestManga,
});

const mapDispatchToProps = {
  getPopularManga: MangaActions.creators.getPopularManga,
  getLatestManga: MangaActions.creators.getLatestManga,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
