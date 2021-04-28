import React, { useEffect, useState } from 'react';
import { Author, Category, ProcessedVideo } from '../common/interfaces';
import Button from '../elements/button';
import FloatButton from '../elements/float-button';
import Modal from '../elements/modal';

interface AddVideoModalProps {
  setAddVideoOpen: Function;
  categories: Category[];
  authors: Author[];
  setVideos: Function;
  editVideo: ProcessedVideo | null;
  setEditVideo: Function;
  videos: ProcessedVideo[];
}

const AddVideoModal: React.FC<AddVideoModalProps> = ({
  videos,
  setVideos,
  setAddVideoOpen,
  categories,
  authors,
  editVideo,
  setEditVideo,
}) => {
  const [video, setVideo] = useState<Partial<ProcessedVideo>>({});

  useEffect(() => {
    editVideo && setVideo(editVideo);
    return () => {
      setVideo({});
      setEditVideo(null);
    };
  }, [editVideo, setEditVideo]);

  function handleChange(field: string, value: string | string[]) {
    setVideo((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function onSave() {
    if (editVideo) {
      const newVideos = videos.map((item) => {
        if (item === editVideo) {
          return video;
        }
        return item;
      });
      setVideos(newVideos);
    } else {
      setVideos((prev: ProcessedVideo[]) => [...prev, video]);
    }
    setAddVideoOpen(false);
  }

  return (
    <Modal setAddVideoOpen={setAddVideoOpen}>
      <h3 className="text-2xl text-center my-4">{editVideo ? 'Edit Video' : 'Add Video'}</h3>
      <div className="my-4 flex justify-around">
        <label htmlFor="video-name" className="mr-4">
          Video name
        </label>
        <input
          name="video-name"
          id="video-name"
          className="border-gray border-2 rounded-sm w-3/5"
          value={video.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>
      <div className="my-4 flex justify-around">
        <label htmlFor="video-author" className="mr-4">
          Video author
        </label>
        <select
          name="video-author"
          id="video-author"
          className="border-gray border-gray border-2 rounded-sm w-3/5"
          value={video.author}
          onChange={(e) => handleChange('author', e.target.value)}>
          {authors.map((author) => (
            <option>{author.name}</option>
          ))}
        </select>
      </div>
      <div className="my-4 flex justify-around">
        <label htmlFor="video-category" className="mr-4">
          Video category
        </label>
        <select
          multiple
          name="video-category"
          id="video-category"
          className="border-gray border-gray border-2 rounded-sm w-3/5"
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
        <FloatButton onClick={onSave} disabled={!(video.name && video.author && video.categories)}>
          <p>SUBMIT</p>
        </FloatButton>
      </div>
    </Modal>
  );
};

export default AddVideoModal;
