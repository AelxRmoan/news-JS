import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: () => void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: () => void) {
    let target = e.target;
    const newsContainer = e.currentTarget;

    const targetEl = target as HTMLElement;
    const newsContainerEl = newsContainer as HTMLElement;

    while (target !== newsContainer) {
      if (targetEl.classList.contains('source__item')) {
        const sourceId = targetEl.getAttribute('data-source-id');
        if (newsContainerEl.getAttribute('data-source') !== sourceId) {
          newsContainerEl.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = (target as HTMLElement).parentNode;
    }
  }
}

export default AppController;
