import "server-only";

export const serverSideFunction = () => {
  console.log("fetching data from a database, api variables");
  return "server: task finish";
};

export const fetchDataImages = () => {
  console.log("fetching image data");
  return "data: images data";
};
