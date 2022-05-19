import {Patient} from "./patient.model";

export const MockPatientList: Patient[]=[
  {id:1,
    firstName:'John',
    lastName:'Doe',
    dateOfBirth:'01-01-1990',
    age:32,
    gender:'M',
    address:'address of John',
    phone:'123-345',
    notes: [{id:'aze',noteContent:'RAS'},{id:'ert',noteContent:'Fumeur'}],
    diagnostic:'Borderline'},

  {id:2,
    firstName:'Meredith',
    lastName:'Smith',
    dateOfBirth:'01-01-2000',
    age:22,
    gender:'F',
    address:'address of Meredith',
    phone:'123-345',
    notes:[],
    diagnostic:'None'},

  {id:3,
    firstName:'Will',
    lastName:'Turner',
    dateOfBirth:'15-06-1950',
    age:72,
    gender:'M',
    address:'address of Will',
    phone:'123-345',
    notes:[{id:'aze',noteContent:'RAS'},{id:'ert',noteContent:'Fumeur'},
      {id:'poi',noteContent:'microalbumine,poids,cholesterol'}],
    diagnostic:'In Danger'}
];

