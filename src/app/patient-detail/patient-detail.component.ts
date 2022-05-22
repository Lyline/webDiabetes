import {Component, OnInit} from '@angular/core';
import {faTrashCan} from "@fortawesome/free-regular-svg-icons/faTrashCan";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons/faPenToSquare";
import {Patient} from "../models/patient.model";
import {PatientService} from "../patient.service";
import {ActivatedRoute} from "@angular/router";


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

  updateIcon=faPenToSquare;
  deleteIcon=faTrashCan

  constructor(public service: PatientService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('patientId'));
    this.getPatientById(id);
  }

  getPatientById(id: number): void{
    this.service.getPatientById(id)
      .subscribe(patient=>this.patient= patient);
  }
}
