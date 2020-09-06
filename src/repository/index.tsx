import batoto from './batoto';

const repository = (source: MangaSource) => {
  switch (source) {
    case 'Batoto':
      return batoto;
  }
  return batoto;
};

export default repository;
