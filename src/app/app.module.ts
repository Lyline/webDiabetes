import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {PatientListComponent} from './patientList/patientList.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import {PatientAddFormComponent} from './patient-add-form/patient-add-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PatientUpdateFormComponent} from './patient-update-form/patient-update-form.component';
import {HttpClientModule} from "@angular/common/http";
import {NoteListComponent} from './note-list/note-list.component';
import {NoteAddComponent} from './note-add/note-add.component';
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PatientListComponent,
    PatientDetailComponent,
    PatientAddFormComponent,
    PatientUpdateFormComponent,
    NoteListComponent,
    NoteAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports:[
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
