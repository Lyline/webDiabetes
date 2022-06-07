import {Component, OnInit} from '@angular/core';

import {Patient} from "../models/patient.model";
import {PatientService} from "../patient.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  public patient: Patient = {
    id:0,
    firstName:'',
    lastName:'',
    dateOfBirth:'',
    age:0,
    gender:'',
    address:'',
    phone:'',
    notes: [],
    diagnostic:''
  };



  constructor(public service: PatientService, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('patientId'));
    this.getPatientById(id);
  }

  refreshPatient(): void {
    this.getPatientById(this.patient.id);
  }

  getPatientById(id: number): void{
    this.service.getPatientById(id)
      .subscribe(patient=>this.patient= patient);
  }

  deletePatient(): void{
    this.service.deletePatientById(this.patient.id).subscribe(patient=> {
      this.patient = patient;
      this.router.navigateByUrl('/patients').then();
    });
  }

  updatePatient(id: number): void{
    this.router.navigateByUrl('/patients/consultation/'+id+'/update').then();
  }
}
