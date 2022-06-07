import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../patient.service";
import {Patient} from "../models/patient.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-patient-new',
  templateUrl: './patient-add-form.component.html',
  styleUrls: ['./patient-add-form.component.css']
})
export class PatientAddFormComponent implements OnInit {
  patientForm!: FormGroup;
  patient!: Patient;

  constructor(public service: PatientService, private fb: FormBuilder, private route: Router) {
  }

  ngOnInit(): void {
    this.patientForm= this.fb.group({
      id:[''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: [''],
      phone: ['']
    })
  }

  onSubmit(){
     this.service.createPatient(this.patientForm.value).subscribe(newPatient=> {
       this.patient = newPatient
       this.route.navigateByUrl("/patients/consultation/"+this.patient.id).then();
     });
  }

}
