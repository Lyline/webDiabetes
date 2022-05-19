import {Note} from "./note.model";

export interface Patient{
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  age: number;
  gender: string;
  address: string;
  phone: string;
  notes:Array<Note>;
  diagnostic: string;

}
