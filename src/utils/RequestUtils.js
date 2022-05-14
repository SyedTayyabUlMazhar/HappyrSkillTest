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
}

const RequestUtils = {
  getInitialVideoData,
};

export default RequestUtils;