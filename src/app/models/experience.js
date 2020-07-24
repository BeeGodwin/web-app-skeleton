import omit from 'lodash/omit';

export const experience = (experienceRequestBody) => {
  return omit(experienceRequestBody, ['$schema']);
};