import axios from 'axios';
export class PixabayFetchFunc {
  constructor(BASE_URL, API_KEY) {
    this.BASE_URL = BASE_URL;
    this.API_KEY = API_KEY;
    this._searchQuery = '';
    this._searchPage = 1;
  }
  get searchQuery() {
    return this._searchQuery;
  }

  set searchQuery(value) {
    return (this._searchQuery = value);
  }

  get searchPage() {
    return this._searchPage;
  }
  set searchPage(value) {
    return (this._searchPage += value);
  }

  async getImages() {
    axios.defaults.baseURL = this.BASE_URL;
    console.log(
      'this.searchQuery',
      this.searchQuery,
      'searchPage',
      this.searchPage,
    );
    let url = `?q=${this.searchQuery}&page=${this.searchPage}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    try {
      const result = await axios.get(url);
      const data = await result.data.hits;
      return data;
    } catch (error) {
      console.log('err', error.message);
    }

    // return axios
    //   .get(url)
    //   .then(result => {
    //     console.log(result);
    //     return result.data;
    //   })
    //   .then(data => {
    //     console.log(data.hits);
    //     return data.hits;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
}