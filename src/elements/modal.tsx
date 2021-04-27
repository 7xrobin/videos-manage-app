import React from 'react';

interface ModalProps {
  setAddVideoOpen: Function;
}

const Modal: React.FC<ModalProps> = ({ children, setAddVideoOpen }) => {
  return (
    <div>
      <div className="modal-container">
        <button className="absolute right-2 top-2" onClick={() => setAddVideoOpen(false)}>
          &#10005;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
