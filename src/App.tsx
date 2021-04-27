import React, { useEffect, useState } from 'react';
import Toolbar from './components/toolbar';
import { VideosTable } from './components/videos-table';
import { getVideos } from './services/videos';
import { ProcessedVideo } from './common/interfaces';
import AddVideoModal from './components/add-video';

const App: React.FC = () => {
  const [videos, setVideos] = useState<ProcessedVideo[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [addVideoOpen, setAddVideoOpen] = useState<boolean>(false);

  useEffect(() => {
    getVideos().then((videos) => {
      setVideos(videos);
    });
  }, []);

  return (
    <div className="h-full">
      <Toolbar searchText={searchText} setSearchText={setSearchText} setAddVideoOpen={setAddVideoOpen}></Toolbar>
      {addVideoOpen ? <AddVideoModal setAddVideoOpen={setAddVideoOpen} /> : <VideosTable videos={videos} searchText={searchText} />}
    </div>
  );
};

export default App;
