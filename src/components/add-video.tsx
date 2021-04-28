import React, { useState } from 'react';
import { Author, Category, ProcessedVideo } from '../common/interfaces';
import Button from '../elements/button';
import Modal from '../elements/modal';

interface AddVideoModalProps {
  setAddVideoOpen: Function;
  categories: Category[];
  authors: Author[];
  setVideos: Function;
}

const AddVideoModal: React.FC<AddVideoModalProps> = ({ setVideos, setAddVideoOpen, categories, authors }) => {
  const [video, setVideo] = useState<Partial<ProcessedVideo>>({});

  function handleChange(field: string, value: string | string[]) {
    setVideo((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function onSave() {
    console.log(video);
    setVideos((prev: ProcessedVideo[]) => [...prev, video]);
    setAddVideoOpen(false);
  }

  return (
    <Modal setAddVideoOpen={setAddVideoOpen}>
      <h3 className="text-2xl text-center my-4">Add Video</h3>
      <div className="my-4">
        <label htmlFor="video-name" className="mr-4">
          Video name
        </label>
        <input
          name="video-name"
          id="video-name"
          className="border-gray border-2 rounded-sm"
          value={video.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="video-author" className="mr-4">
          Video author
        </label>
        <select
          name="video-author"
          id="video-author"
          className="border-gray border-gray border-2 rounded-sm"
          value={video.author}
          onChange={(e) => handleChange('author', e.target.value)}>
          {authors.map((author) => (
            <option>{author.name}</option>
          ))}
        </select>
      </div>
      <div className="my-4">
        <label htmlFor="video-category" className="mr-4">
          Video category
        </label>
        <select
          multiple
          name="video-category"
          id="video-category"
          className="border-gray border-gray border-2 rounded-sm"
          value={video.categories}
          onChange={(e) =>
            handleChange(
              'categories',
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }>
          {categories.map((category) => (
            <option>{category.name}</option>
          ))}
        </select>
      </div>
      <div className="absolute right-4 bottom-4">
        <Button color="blueRoyal" onClick={() => setAddVideoOpen(false)}>
          <p className="mr-4">CANCEL</p>
        </Button>
        <Button color="greenMoving" onClick={onSave}>
          <p>SAVE</p>
        </Button>
      </div>
    </Modal>
  );
};

export default AddVideoModal;
