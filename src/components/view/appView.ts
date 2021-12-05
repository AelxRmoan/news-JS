import News from './news/news';
import Sources from './sources/sources';

interface IData {
  urlToImage: string;
  title: string;
  description: string;
  url: string;
  author: string;
  publishedAt: string;
  source: object;
  articles: Array<object>;
  sources: object;
}

interface ISNews {
  draw: (data: object) => void;
}

export class AppView {
  news: ISNews;
  sources: ISNews;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: Partial<IData>) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: Partial<IData>) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
