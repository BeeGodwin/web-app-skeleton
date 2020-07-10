export const lastSegmentOfLocation = (location) => {
  const { pathname } = location;
  return pathname.split('/').pop();
};

export const locationWithoutLastSegment = (location) => {
  const { pathname } = location;
  const parts = pathname.split('/');
  parts.pop();
  return parts.join('/'); 
};