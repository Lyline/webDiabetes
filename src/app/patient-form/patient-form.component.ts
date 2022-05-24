import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../patient.service";
import {Patient} from "../models/patient.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-patient-new',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patientForm: FormGroup;
  patient!: Patient;

  constructor(public service: PatientService, private fb: FormBuilder, private router: Router) {
    this.patientForm= this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: [''],
      phone: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
      this.service.createPatient(this.patientForm.value).subscribe(newPatient => this.patient = newPatient)
      this.router.navigateByUrl("/patients/consultation/" + this.patient.id).then();
  }

}
