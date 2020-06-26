export const lastSegmentOfLocation = (location) => {
  const { pathname } = location;
  return pathname.split('/').pop();
};