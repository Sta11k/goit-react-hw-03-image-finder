import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.arreyImages.map(el => {
          return (
            <ImageGalleryItem key={el.id} webformatURL={el.webformatURL} />
          );
        })}
      </ul>
    );
  }
}
