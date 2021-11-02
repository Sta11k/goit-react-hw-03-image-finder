import axios from 'axios';
export class PixabayFetchFunc {
  constructor(BASE_URL, API_KEY) {
    this.BASE_URL = BASE_URL;
    this.API_KEY = API_KEY;
    this.searchQuery = '';
    this.searchPage = 1;
  }
  get searchQuery() {
    return this._searchQuery;
  }

  set searchQuery(value) {
    return (this._searchQuery = value);
  }

  getImages = () => {
    console.log(this.searchQuery);
    axios.defaults.baseURL = this.BASE_URL;
    let url = `?q=${this.searchQuery}&page=${this.searchPage}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    return axios
      .get(url)
      .then(result => {
        console.log(result);
        return result.data;
      })
      .then(data => {
        console.log(data.hits);
        return data.hits;
      })
      .catch(err => {
        console.log(err);
      });
  };
}
