export const programmeCollection = (moduleData) => {
  return moduleData.map((item) => {
    return {
      titles: item.titles,
      id: item.id,
      image_url: item.image_url
    };
  });
};