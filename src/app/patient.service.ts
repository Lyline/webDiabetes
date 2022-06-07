import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Patient} from "./models/patient.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Note} from "./models/note.model";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientList:Patient[]= [];
  patients!:Observable<Patient[]>;
  note!: Note;

  private baseUrl='http://localhost:8080/diabetesApp';

  constructor(public router: Router, private http: HttpClient) {
  }

  getAllPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}/patients`);
  }

  getPatientById(id:number): Observable<Patient>{
    return this.http.get<Patient>(`${this.baseUrl}/patients/`+id);
  }

  createPatient(patient: Patient): Observable<any>{
    return this.http.post<Patient>(`${this.baseUrl}/patients`,patient);
  }

  updatePatientById(id: number, patientToUpdate: Patient): Observable<Patient> {
   return this.http.put<Patient>(`${this.baseUrl}/patients/${id}`,patientToUpdate);
  }

  deletePatientById(id: number): Observable<Patient>{
    return this.http.delete<Patient>(`${this.baseUrl}/patients/`+id);
  }

  createNote(note:Note): Observable<Note> {
    return this.http.post<Note>(`${this.baseUrl}/patients/${note.patientId}/notes`,note);
  }

  updateNote(note: Note): Observable<Note>{
    return this.http.put<Note>(`${this.baseUrl}/patients/${note.patientId}/notes/${note.id}`,note);
  }

  deleteNote(note:Note): Observable<Note>{
    return this.http.delete<Note>(`${this.baseUrl}/patients/${note.patientId}/notes/${note.id}`);
  }
}
