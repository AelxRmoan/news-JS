import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '2a478aabc12a43f588edf20489784bc4&', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
