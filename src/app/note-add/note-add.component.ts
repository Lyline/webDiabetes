import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {
  noteForm!: FormGroup;
  patientId!: number;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NoteAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: string,
      patientId: number,
      noteContent: string,
    }) {
  }

  ngOnInit(): void {
    if (this.data.id===undefined) {
      this.patientId = this.data.patientId;
      this.noteForm = this.fb.group({
        patientId: [this.patientId],
        noteContent: ['', Validators.required]
      });
    }else {
      this.patientId = this.data.patientId;
      this.noteForm = this.fb.group({
        id: [this.data.id],
        patientId: [this.patientId],
        noteContent: [this.data.noteContent, Validators.required]
      });
    }
  }

  submit(form:NgForm) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form
    });
  }
}
