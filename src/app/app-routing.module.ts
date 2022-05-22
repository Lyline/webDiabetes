import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PatientListComponent} from "./patientList/patientList.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "patients", component: PatientListComponent},
  { path: "patients/consultation/:patientId", component: PatientDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
