import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Patient} from "./models/patient.model";
import {MockPatientList} from "./models/mock-patientList";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() {
  }
  /*constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8081/patients';

  getAllPatientsForReal(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}`);
  }*/

  getAllPatients(): Observable<Patient[]>{
    const patients= of(MockPatientList);
    return patients;
  }

  getPatientById(id:number): Observable<Patient>{
    let patient= MockPatientList.find(p=>p.id===id);

    if (patient == undefined) {
      return of(MockPatientList[0])
    } else {
      return of(patient);
    }
  }
}
