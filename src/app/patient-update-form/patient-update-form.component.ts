import {Component, OnInit} from '@angular/core';
import {PatientService} from "../patient.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Patient} from "../models/patient.model";


@Component({
  selector: 'app-patient-update-form',
  templateUrl: './patient-update-form.component.html',
  styleUrls: ['./patient-update-form.component.css']
})
export class PatientUpdateFormComponent implements OnInit {
  patientForm!:FormGroup;
  patient!: Patient;
  patientToUpdate!: Patient;



  constructor(private service:PatientService, public fb:FormBuilder,
              private activatedRoute:ActivatedRoute, private route:Router) {
  }

  ngOnInit(): void {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('patientId'));
    this.service.getPatientById(id).subscribe(patient=> {
      this.patient = patient;

      this.patientForm=this.fb.group({
        firstName: [this.patient.firstName,Validators.required],
        lastName: [this.patient.lastName, Validators.required],
        dateOfBirth: [this.patient.dateOfBirth, Validators.required],
        gender: [this.patient.gender, Validators.required],
        address: [this.patient.address],
        phone: [this.patient.phone]
      })
    });
  }

  onSubmit(){
    this.patientToUpdate=this.patientForm.value;
    this.service.updatePatientById(this.patient.id,this.patientToUpdate).subscribe(patientUpdate=> {
     this.patientToUpdate = patientUpdate;
      this.route.navigateByUrl("/patients/consultation/"+this.patient.id).then();
    })

  }
}
