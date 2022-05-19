import {Component, OnInit} from '@angular/core';
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons/faPenToSquare";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons/faTrashCan";
import {MockPatientList} from "../models/mock-patientList";
import {faListAlt} from "@fortawesome/free-regular-svg-icons/faListAlt";

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

  patientList= MockPatientList;

  constructor() { }

  ngOnInit(): void {
  }

}
