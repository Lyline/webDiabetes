import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PatientListComponent} from "./patientList/patientList.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";
import {PatientAddFormComponent} from "./patient-add-form/patient-add-form.component";
import {PatientUpdateFormComponent} from "./patient-update-form/patient-update-form.component";

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "patients", component: PatientListComponent},
  { path: "patients/consultation/:patientId", component: PatientDetailComponent},
  { path: "newPatient", component: PatientAddFormComponent},
  { path: "patients/consultation/:patientId/update", component: PatientUpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
