import { getCategories } from './categories';
import { getAuthors } from './authors';
import { Author, Category, ProcessedVideo } from '../common/interfaces';

export const getVideos = (): Promise<[Category[], Author[], ProcessedVideo[]]> => {
  return Promise.all([getCategories(), getAuthors()]).then(([categories, authors]) => {
    let processedVideos: ProcessedVideo[] = [];
    processedVideos = authors.flatMap((author: Author) =>
      author.videos.map((video) => {
        let categoriesNames = categories.filter((cat) => video.catIds.includes(cat.id)).map((cat) => cat.name);
        return {
          id: video.id,
          name: video.name,
          author: author.name,
          categories: categoriesNames,
        };
      })
    );
    return [categories, authors, processedVideos];
  });
};
