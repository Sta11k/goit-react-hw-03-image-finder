import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li>
        <img
          src={this.props.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
