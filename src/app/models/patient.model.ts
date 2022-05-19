import {Note} from "./note.model";

export class Patient{
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  phone: string;
  notes:Array<Note>;
  diagnostic: string;


  constructor(id: number, firstName: string, lastName: string, dateOfBirth: string, gender: string, address: string, phone: string, notes: Array<Note>, diagnostic: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.address = address;
    this.phone = phone;
    this.notes = notes;
    this.diagnostic = diagnostic;
  }
}
