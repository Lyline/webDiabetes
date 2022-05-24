import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Patient} from "./models/patient.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientList: Patient[]= [
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

  constructor(public router: Router) {
  }
  /*constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8081/patients';

  getAllPatientsForReal(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}`);
  }*/

  getAllPatients(): Observable<Patient[]>{
    const patients= of(this.patientList);
    return patients;
  }

  getPatientById(id:number): Observable<Patient>{
    let patient= this.patientList.find(p=>p.id==id);

    if (patient == undefined) {
      this.router.navigateByUrl('/patients').then();
      return of(this.patientList[0])
    }
    return of(patient);
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
