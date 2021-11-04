import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  onClickOverlayHandle = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.onClickOverlayHandle}>
        <div className="Modal">
          <img src={this.props.showModalHendle} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
