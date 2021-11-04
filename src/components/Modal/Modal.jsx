import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  onClickOverlayHandler = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    // console.log('object :>> ', this.props.fullImageURL);
    return createPortal(
      <div className="Overlay" onClick={this.onClickOverlayHandler}>
        <div className="Modal">
          <img src={this.props.fullImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
