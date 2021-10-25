import { React, Component } from 'react';
class Searchbar extends Component {
  state = {
    value: '',
  };
  changeHandler = e => {
    this.setState({ value: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
  };

  render() {
    const { value } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            onChange={this.changeHandler}
            value={value}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
