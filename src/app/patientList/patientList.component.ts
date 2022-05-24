import {Component, OnInit} from '@angular/core';
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons/faPenToSquare";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons/faTrashCan";
import {faListAlt} from "@fortawesome/free-regular-svg-icons/faListAlt";
import {Patient} from "../models/patient.model";
import {PatientService} from "../patient.service";

@Component({
  selector: 'app-patientList',
  templateUrl: './patientListcomponent.html',
  styleUrls: ['./patientList.component.css']
})
export class PatientListComponent implements OnInit {
  //FontAwesome Icons
  getIcon=faListAlt;
  updateIcon=faPenToSquare;
  deleteIcon=faTrashCan;

  patientList: Patient[]=[];
  patient: Patient | undefined;

  constructor(private service: PatientService) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients(): void{
    this.service.getAllPatients()
      .subscribe(patients=>this.patientList= patients);
  }

  deletePatient(id: number): void{
    this.service.deletePatientById(id);
  }
}
