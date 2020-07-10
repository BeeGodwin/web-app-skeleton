// import { getProgramme } from '../clients/rms';
// import { programme } from '../models/programme';

export const fetchSinglePid = (pid) => {
  console.log('BEEBUG: pid', pid);

  // doesn't work to use the RMS client from the browser. 
  // making a data path that just returns the JSON, inside the controller.
  // call this with axios etc.

  // let newProgramme;
  // getProgramme(pid)
  // .then(
  //   ({ body }) => {
  //     const model = programme(body);
  //     newProgramme = model;
  //   }, (err) => {
  //     console.log('BEEBUG: error: ', err);
  //   }
  // )
  // .then(
  //   () => {
  //     console.log('BEEBUG: newProgramme', newProgramme);
  //   }
  // );
};