import {Patient} from "./patient.model";
import {Note} from "./note.model";

export const MockPatientList: Patient[]=[
  new Patient(1,'John','Doe','01-01-1890','M','address of John','123-345',
    [new Note('aze','RAS'),new Note('ert','Fumeur')],'Borderline'),
  new Patient(2,'Meredith','Smith','01-01-1990','F','address of Meredith','123-345',
    [],'None'),
  new Patient(1,'Will','Turner','15-06-1950','M','address of Will','123-345',
    [new Note('aze','RAS'),new Note('ert','Fumeur'),
      new Note('poi','microalbumine,poids,cholesterol')],'In Danger')
];

