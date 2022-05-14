import mockData from '../mockData';

const getInitialVideoData = () =>
{
  return new Promise((resolve, reject) =>
  {

    setTimeout(() =>
    {
      resolve(mockData[0]);
    }, 2000);
  });
};


const searchVideos = (searchTerm) =>
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      // search for searchTerm in title, description, tag
      const results = mockData.filter(video =>
      {
        const _searchTerm = searchTerm.toLowerCase();

        const title = video.title.toLowerCase();
        const description = video.description.toLowerCase();
        const tag = video.tag.toLowerCase();

        return title.includes(_searchTerm) ||
          description.includes(_searchTerm) ||
          tag.includes(_searchTerm);
      });

      resolve(results);

    }, 2000);
  });
}

const RequestUtils = {
  getInitialVideoData,
  searchVideos,
};

export default RequestUtils;