import React from 'react';
import { ProcessedVideo } from '../common/interfaces';

interface VideosTableProps {
  videos: ProcessedVideo[];
}

export const VideosTable: React.FC<VideosTableProps> = ({ videos }) => {
  return (
    <div className="table-container">
      <table className="w-full">
        <thead className="table-header-group">
          <tr className="table-row">
            <th className="font-normal">Video Name</th>
            <th className="font-normal">Author</th>
            <th className="font-normal">Categories</th>
            <th className="font-normal">Options</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.id}>
              <td>{video.name}</td>
              <td>{video.author}</td>
              <td>{video.categories.join(', ')}</td>
              <td> {/* add buttons here as needed */} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
