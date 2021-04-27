import React from 'react';
import Button from '../elements/button';
import Modal from '../elements/modal';

interface AddVideoModalProps {
  setAddVideoOpen: Function;
}

const AddVideoModal: React.FC<AddVideoModalProps> = ({ setAddVideoOpen }) => {
  return (
    <Modal setAddVideoOpen={setAddVideoOpen}>
      <h3 className="text-2xl text-center my-4">Add Video</h3>
      <div className="my-4">
        <label htmlFor="video-name" className="mr-4">
          Video name
        </label>
        <input name="video-name" id="video-name" className="border-gray border-2 rounded-sm" />
      </div>
      <div className="my-4">
        <label htmlFor="video-author" className="mr-4">
          Video author
        </label>
        <select name="video-author" id="video-author" className="border-gray border-gray border-2 rounded-sm" />
      </div>
      <div className="my-4">
        <label htmlFor="video-author" className="mr-4">
          Video category
        </label>
        <select name="video-author" id="video-author" className="border-gray border-gray border-2 rounded-sm" />
      </div>
      <div className="absolute right-4 bottom-4">
        <Button color="blueRoyal" onClick={() => setAddVideoOpen(false)}>
          <p className="mr-4">CANCEL</p>
        </Button>
        <Button color="greenMoving">
          <p>SAVE</p>
        </Button>
      </div>
    </Modal>
  );
};

export default AddVideoModal;
