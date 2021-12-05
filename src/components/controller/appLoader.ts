import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'e96535dbf28c4d93b4864e106f00de18&', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
