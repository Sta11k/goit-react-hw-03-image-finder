import './styles.css';
import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import { PixabayFetchFunc } from './services/apiSearchImg';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23145424-17de0e2191faefedd106abc58';

const newPixabayFetchFunc = new PixabayFetchFunc(BASE_URL, API_KEY);
console.log('SEARCH', newPixabayFetchFunc);
class App extends Component {
  state = {
    arreyImages: [],
    searchQuery: '',
    searchPage: 1,
    searchValue: '',
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      newPixabayFetchFunc.searchQuery = this.state.searchQuery;
      newPixabayFetchFunc.getImages().then(response => {
        this.setState({ arreyImages: response });
        console.log(response);
      });
    }
  }
  onsubmitHandler = submitSearchForm => {
    // this.maxPages = 0;

    this.setState(() => ({
      // arreyImages: [],
      searchQuery: submitSearchForm,
      searchPage: 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onsubmitHandler} />
        <ul className="ImageGallery">
          {this.state.arreyImages.length > 0 &&
            this.state.arreyImages.map(el => {
              return (
                <li key={el.id}>
                  <img
                    src={el.webformatURL}
                    alt=""
                    className="ImageGalleryItem-image"
                  />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
