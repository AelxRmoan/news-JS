interface IFirst {
  endpoint: string,
  options: object,
}
// interface ISecond {
//   ok: boolean,
//   status: number | string,
//   statusText: string,
//   json: Function
// }
// interface IThird {
//   ok: boolean,
//   status: number | string,
//   statusText: string
// }

class Loader {
  baseLink: string;
  options: object;

  constructor(baseLink: string, options: object) {
      this.baseLink = baseLink;
      this.options = options;
  }

  getResp(
      { endpoint, options = {} }: Partial<IFirst>,
      callback = () => {
          console.error('No callback for GET response');
      }
  ) {
      this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
      if (!res.ok) {
          if (res.status === 401 || res.status === 404)
              console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
          throw Error(res.statusText);
      }

      return res;
  }

  makeUrl(options: object, endpoint: string) {
      const urlOptions: object = {...this.options, ...options };
      let url = `${this.baseLink}${endpoint}?`;

      (Object.keys(urlOptions) as Array<never>).forEach((key) => {
          url += `${key}=${urlOptions[key]}`;
      });

      return url.slice(0);
  }

  load(method: string, endpoint: string, callback: (data: JSON) => void, options = {}) {
      fetch(this.makeUrl(options, endpoint), { method })
          .then(this.errorHandler)
          .then((res) => res.json())
          .then((data) => callback(data))
          .catch((err) => console.error(err));
  }
}

export default Loader;
