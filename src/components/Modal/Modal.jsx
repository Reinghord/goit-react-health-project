import ReactDOM from 'react-dom';
import { Overlay, ModalContainer } from './modal.styled';
import Recommendations from './Recommendations/Recommendations';
import { useEffect } from 'react';

const modalDiv = document.querySelector('#modal');

function Modal({ onClose }) {
  const handleOnBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e);
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <Overlay onClick={handleOnBackdropClick}>
      <ModalContainer>
        <button onClick={onClose} type="button">
          x
        </button>
        <Recommendations />
      </ModalContainer>
    </Overlay>,
    modalDiv
  );
}

export default Modal;
