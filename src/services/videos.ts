import { getCategories } from './categories';
import { getAuthors } from './authors';
import { Author, ProcessedVideo } from '../common/interfaces';

export const getVideos = (): Promise<ProcessedVideo[]> => {
  return Promise.all([getCategories(), getAuthors()]).then(([categories, authors]) => {
    console.log([categories, authors]);
    let processedResult: ProcessedVideo[] = [];
    processedResult = authors.flatMap((author: Author) =>
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
    return processedResult;
  });
};
