import FetchBlob, {RNFetchBlobConfig} from 'rn-fetch-blob';
import cheerio from 'react-native-cheerio';

const BASE_URL = 'https://bato.to';

const config: RNFetchBlobConfig = {
  timeout: 5000,
  indicator: true,
};

const getPopularManga = async () => {
  try {
    const url = `${BASE_URL}/browse?langs=english`;
    const resp = await FetchBlob.config(config).fetch('GET', url);
    const html = await resp.text();
    const $ = cheerio.load(html);

    const items: Array<CheerioElement> = [];
    const elems: Array<Manga> = [];

    $('#series-list')
      .find('.item')
      .each((i, e) => {
        items.push(e);
      });

    items.forEach((e) => {
      const elem = $(e);
      const id = elem.find('.item-cover').attr('href')?.slice(8) || '';
      const title = elem.find('.item-title')[0].children[0].data || '';
      const latestChapter =
        elem.find('.item-volch')[0].children[1].children[0].data || '';
      const thumbnail = `https:${elem.find('img')[0].attribs.src}`;

      elems.push({
        id,
        title,
        latestChapter,
        thumbnail,
      });
    });

    return elems;
  } catch (e) {
    throw new Error('Error while fetching data');
  }
};

const getLatestManga = async () => {
  try {
    const url = `${BASE_URL}/latest?langs=english`;
    const resp = await FetchBlob.config(config).fetch('GET', url);
    const html = await resp.text();
    const $ = cheerio.load(html);

    const items: Array<CheerioElement> = [];
    const elems: Array<Manga> = [];

    $('#series-list')
      .find('.item')
      .each((i, e) => {
        items.push(e);
      });

    items.forEach((e) => {
      const elem = $(e);
      const id = elem.find('.item-cover').attr('href')?.slice(8) || '';
      const title = elem.find('.item-title')[0].children[0].data || '';
      const latestChapter =
        elem.find('.item-volch')[0].children[1].children[0].data || '';
      const thumbnail = `https:${elem.find('img')[0].attribs.src}`;

      elems.push({
        id,
        title,
        latestChapter,
        thumbnail,
      });
    });

    return elems;
  } catch (e) {
    throw new Error('Error while fetching data');
  }
};

const repository: Repository = {
  getPopularManga,
  getLatestManga,
};

export default repository;
