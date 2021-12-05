import './news.css';

interface ISource {
  id: null | number | string;
  name: string;
}

interface IItem {
  urlToImage: string;
  title: string;
  description: string;
  url: string;
  author: string;
  publishedAt: string;
  source: object;
}

class News {
  draw(data: Array<object>) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp');

    news.forEach((item: IItem, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true);

      if (idx % 2) (newsClone as Element).querySelector('.news__item').classList.add('alt');

      ((newsClone as Element).querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (newsClone as Element).querySelector('.news__meta-author').textContent =
        item.author || (item.source as ISource).name;
      (newsClone as Element).querySelector('.news__meta-date').textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      (newsClone as Element).querySelector('.news__description-title').textContent = item.title;
      (newsClone as Element).querySelector('.news__description-source').textContent = (item.source as ISource).name;
      (newsClone as Element).querySelector('.news__description-content').textContent = item.description;
      (newsClone as Element).querySelector('.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    document.querySelector('.news').innerHTML = '';
    document.querySelector('.news').appendChild(fragment);
  }
}

export default News;
