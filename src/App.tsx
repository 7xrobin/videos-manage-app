import React, { useEffect, useState } from 'react';
import Toolbar from './components/toolbar';
import { getVideos } from './services/videos';
import { Author, Category, ProcessedVideo } from './common/interfaces';
import AddVideoModal from './components/add-video';
import VideosTable from './components/videos-table';

const App: React.FC = () => {
  const [categories, setCatgories] = useState<Category[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [videos, setVideos] = useState<ProcessedVideo[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [addVideoOpen, setAddVideoOpen] = useState<boolean>(false);

  useEffect(() => {
    getVideos().then(([categories, authors, videos]) => {
      setCatgories(categories);
      setAuthors(authors);
      setVideos(videos);
    });
  }, []);

  return (
    <div className="h-full">
      <Toolbar searchText={searchText} setSearchText={setSearchText} setAddVideoOpen={setAddVideoOpen}></Toolbar>
      {addVideoOpen ? (
        <AddVideoModal setVideos={setVideos} setAddVideoOpen={setAddVideoOpen} categories={categories} authors={authors} />
      ) : (
        <VideosTable videos={videos} searchText={searchText} />
      )}
    </div>
  );
};

export default App;
