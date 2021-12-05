import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface IFoos1 {
  drawNews: (arg1: object) => void;
  drawSources: (arg1: object) => void;
}

interface IFoos2 {
  getNews: (arg1: Event, ...arg2: Array<object>) => void;
  getSources: (arg1: object | Event) => void;
}

class App {
  controller: IFoos2;
  view: IFoos1;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    document
      .querySelector('.sources')
      .addEventListener('click', (e) => this.controller.getNews(e, (data: object) => this.view.drawNews(data)));
    this.controller.getSources((data: object) => this.view.drawSources(data));
  }
}

export default App;
