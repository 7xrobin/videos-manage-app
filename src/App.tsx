import React, { useEffect, useState } from 'react';
import Toolbar from './components/toolbar';
import { VideosTable } from './components/videos-table';
import { getVideos } from './services/videos';
import { ProcessedVideo } from './common/interfaces';
import FloatButton from './elements/float-button';

const App: React.FC = () => {
  const [videos, setVideos] = useState<ProcessedVideo[]>([]);

  useEffect(() => {
    getVideos().then((videos) => {
      setVideos(videos);
    });
  }, []);

  return (
    <div className="h-full">
      <Toolbar></Toolbar>
      <VideosTable videos={videos} />
    </div>
  );
};

export default App;
