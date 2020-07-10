import omit from 'lodash/omit';

export const programme = (programmeRequestBody) => {
  return omit(programmeRequestBody, ['$schema']);
};