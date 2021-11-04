import './styles.css';
import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import { PixabayFetchFunc } from './services/apiSearchImg';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23145424-17de0e2191faefedd106abc58';

const newPixabayFetchFunc = new PixabayFetchFunc(BASE_URL, API_KEY);
console.log('SEARCH', newPixabayFetchFunc);
class App extends Component {
  state = {
    arreyImages: [],
    searchQuery: '',
    // searchPage: 1,
    searchValue: '',
    status: 'init',
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery
      // ||      prevState.searchPage !== this.state.searchPage
    ) {
      newPixabayFetchFunc.resetPage();
      newPixabayFetchFunc.searchQuery = this.state.searchQuery;

      newPixabayFetchFunc
        .getImages()
        .then(response => {
          this.setState({ arreyImages: response });
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  onsubmitHandler = submitSearchForm => {
    // this.maxPages = 0;

    this.setState(() => ({
      // arreyImages: [],
      searchQuery: submitSearchForm,
      // searchPage: 1,
    }));
  };
  loadMoreHandler = () => {
    newPixabayFetchFunc.searchPage = 1;
    console.log('searchPage', newPixabayFetchFunc.searchPage);
    newPixabayFetchFunc.searchQuery = this.state.searchQuery;
    newPixabayFetchFunc
      .getImages()
      .then(arreyImages => {
        this.setState(prev => ({
          arreyImages: [...prev.arreyImages, ...arreyImages],
        }));
        console.log(arreyImages);
      })
      .catch(error => {
        console.log(error);
      });
    // this.setState(() => ({
    //   searchPage: this.state.searchPage + 1,
    // }));
    // console.log(this.searchPage);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onsubmitHandler} />
        {this.state.arreyImages.length > 0 && (
          <ImageGallery arreyImages={this.state.arreyImages} />
        )}
        {this.state.arreyImages.length > 0 && (
          <Button loadMorer={this.loadMoreHandler} text="LOAD MORE..." />
        )}
      </div>
    );
  }
}

export default App;
