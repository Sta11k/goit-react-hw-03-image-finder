// import './App.css';
import './styles.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  submitHandler = search => {
    this.maxPages = 0;

    this.setState(() => ({
      images: [],
      searchQuery: search,
      page: 1,
    }));
  };

  render() {
    // console.log(BASE_URL);
    return (
      <div className="App">
        <Searchbar onSubmit={this.submitHandler} />
      </div>
    );
  }
}

export default App;

// https://github.com/flamesty/goit-react-hw-03-image-finder
// https://learn-reactjs.ru/basics/forms
// https://pixabay.com/api/docs/
// https://github.com/mhnpd/react-loader-spinner
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
