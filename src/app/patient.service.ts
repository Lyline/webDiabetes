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

  createPatient(patient: Patient): Observable<Patient>{
    let lastPatient=this.patientList[this.patientList.length-1];
    patient.id=lastPatient.id+1;
    patient.notes=[];
    patient.diagnostic='None';
    this.patientList.push(patient);
    return of(patient);
  }

  deletePatientById(id: number): void{
    let patientToDelete = this.patientList.findIndex(p => p.id == id);
    this.patientList.splice(patientToDelete,1);
  }
}
