import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface IFoos1 {
    drawNews: Function,
    drawSources: Function,
}

interface IFoos2 {
    getNews: Function,
    getSources: Function,
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
