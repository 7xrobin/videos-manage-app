import React, { useEffect, useState } from 'react';
import Toolbar from './components/toolbar';
import { VideosTable } from './components/videos-table';
import { getVideos } from './services/videos';
import { ProcessedVideo } from './common/interfaces';

const App: React.FC = () => {
  const [videos, setVideos] = useState<ProcessedVideo[]>([]);

  useEffect(() => {
    getVideos().then((videos) => {
      setVideos(videos);
    });
  }, []);

  return (
    <>
      <Toolbar>
        <h6>Videos</h6>
      </Toolbar>
      <div className="px-2 m-auto max-w-5xl">
        <VideosTable videos={videos} />
      </div>
    </>
  );
};

export default App;
